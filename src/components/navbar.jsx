import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const activePage = location.pathname;
  return (
    <div className="navBar">
      <div className="navBar__left">
        <span className="fs__24px color__ffffff fw500">BookStore</span>
      </div>
      <div>
        <ul className="navBar__right">
          {activePage === "/" ? (
            <li>
              <Link className="navItem fs__18px color__ffffff" to="/bookShelf">
                My Bookshelf
              </Link>
            </li>
          ) : (
            <li>
              <Link className="navItem fs__18px color__ffffff" to="/">
                Home
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
