import { useDispatch } from "react-redux";
import { selectBook, removeBook } from "../store/UserSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const author_alrernative_name = Object.keys(data)[0];
  const authorsArray = data[author_alrernative_name];
  const handleSelectBook = () => {
    dispatch(selectBook(data));
  };
  const handleRemoveBook = () => {
    dispatch(removeBook(data));
  };
  console.log(data)
  return (
    <div className="card__container">
      <div className="card__header">
        <span className="fs__12px">{data.title}</span>
      </div>
      <div className="card__body">
        <span>Edition Count : {data.edition_count}</span>
      </div>
      <div className="card__footer">
        {data.isSelectedBook ? (
          <button className="add__button" onClick={() => handleRemoveBook()}>
            Remove From BookShelf
          </button>
        ) : (
          <button className="add__button" onClick={() => handleSelectBook()}>
            Add to BookShlef
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
