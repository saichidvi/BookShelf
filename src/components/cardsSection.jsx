import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/UserSlice";

import Card from "./card";
import Loader from "./loader";
import { useLocation } from "react-router-dom";

const CardsSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const activePage = location.pathname;
  const { books, selectedBooks, loading, error } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(fetchBooks("sample"));
  }, [dispatch]);
  return (
    <div className="cards__section">
      {activePage === "/" ? (
        <>
          {loading ? (
            <>
              <Loader></Loader>
            </>
          ) : (
            <>
              {books.length === 0 ? (
                <span className="color__ffffff">
                  Sorry we do not have any bookes on your search
                </span>
              ) : (
                <>
                  {" "}
                  {books.map((item, index) => {
                    return <Card data={item} key={index}></Card>;
                  })}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {console.log("I am inside the bookslefh side")}
          {selectedBooks.length === 0 ? (
            <span className="color__ffffff">
              Your Book shelf is empty , please add some books to you shelf
            </span>
          ) : (
            <>
              {" "}
              {selectedBooks.map((item, index) => {
                return <Card data={item} key={index}></Card>;
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardsSection;
