import { Routes, Route, Link } from "react-router-dom";

import "./styles/global.css";

import HomePage from "./pages/HomePage/home.jsx";
import NavBar from "./components/navbar.jsx";
import BookShelf from "./pages/BookShelfPage/bookShelf.jsx";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/bookShelf" element={<BookShelf></BookShelf>}></Route>
      </Routes>
    </>
  );
}

export default App;
