import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userInfo = {
  books: [],
  selectedBooks: [],
  loading: false,
  error: "",
};

export const fetchBooks = createAsyncThunk(
  "user/fetchBooks",
  async (query = "panchathantra") => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    const data = await response.json();
    return data.docs;
  }
);

const extractIdFromKey = (key) => {
  const parts = key.split("/");
  return parts[2];
};

const filterBooks = (selectedBooks, newBooks) => {
  const selectedSet = new Set(
    selectedBooks.map((book) => extractIdFromKey(book.key))
  );

  return newBooks.map((book) => {
    const bookId = extractIdFromKey(book.key);
    return {
      ...book,
      isSelectedBook: selectedSet.has(bookId),
    };
  });
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    selectBook: (state, action) => {
      state.loading = true;
      const currentBook = action.payload;
      state.selectedBooks.push({ ...action.payload, isSelectedBook: true });
      state.books.map((book) => {
        const selectedBookId = extractIdFromKey(book.key);
        if (selectedBookId === extractIdFromKey(currentBook.key)) {
          book.isSelectedBook = true;
        }
        return book;
      });
      state.loading = false;
    },
    removeBook: (state, action) => {
      state.loading = true;
      const currentBook = action.payload;
      state.selectedBooks = state.selectedBooks.filter((book) => {
        const selectedBookId = extractIdFromKey(book.key);
        const currentBookId = extractIdFromKey(currentBook.key);
        return selectedBookId !== currentBookId;
      });
      state.books.map((book) => {
        const selectedBookId = extractIdFromKey(book.key);
        if (selectedBookId === extractIdFromKey(currentBook.key)) {
          book.isSelectedBook = false;
        }
        return book;
      });
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = filterBooks(state.selectedBooks, action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectBook, removeBook } = userSlice.actions;
export default userSlice.reducer;
