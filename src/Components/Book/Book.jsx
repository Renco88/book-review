import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookName, image, author, rating,bookId } = book;
  return (
    <div>
     <Link to={`book/${bookId}`}>
     <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex gap-5">
            <div>Fiction</div>
            <div className="flex gap-1">
              {" "}
              <span>{rating}</span>{" "}
              <span className="text-2xl">
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default Book;
