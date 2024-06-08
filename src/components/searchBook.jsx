import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/UserSlice";

const SearchBook = () => {
  const [bookName, setBookName] = useState("");
  const [debouncedBookName, setDebouncedBookName] = useState(bookName);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedBookName(bookName);
    }, 1000); // 1000ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [bookName]);

  useEffect(() => {
    if (debouncedBookName) {
      dispatch(fetchBooks(debouncedBookName));
    }
  }, [dispatch, debouncedBookName]);

  const handleBookSearch = (e) => {
    setBookName(e.target.value);
  };

  return (
    <div className="input__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search your book"
        onChange={(e) => handleBookSearch(e)}
        value={bookName}
      />
      <div className="icon__container">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.05288 4.48168C0.397811 7.0411 0.720801 10.4028 2.83291 12.6003C4.91101 14.767 8.25418 15.1059 10.7248 13.4003C11.2442 13.0429 11.7071 12.6097 12.0982 12.1153C12.4827 11.6291 12.7954 11.0903 13.0266 10.5152C13.5009 9.33409 13.6236 8.04101 13.3799 6.79176C13.14 5.55403 12.5446 4.41304 11.6665 3.50832C10.8017 2.61414 9.68782 2.00087 8.46976 1.74826C7.25655 1.50036 5.9966 1.62828 4.85797 2.11494C3.70852 2.60755 2.73193 3.43153 2.05288 4.48168Z"
            stroke="gray"
            className="stroke__gray"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0957 12.1133L16.0008 14.9584"
            stroke="gray"
            className="stroke__gray"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBook;
