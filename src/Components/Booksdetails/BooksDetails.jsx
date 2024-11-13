import { useLoaderData, useParams } from "react-router-dom";


const BooksDetails = () => {
    const books =useLoaderData();
    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);
    const Book = books.find(book => book.bookId===bookIdInt);
    console.log(bookId,books);
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={Book.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Book.bookName}</h2>
    <p>By : {Book.author}</p>
    <hr className="border border-gray-400 " />
    <p>{Book.category}</p>
    <hr className="border border-gray-400 " />
    <p>Review: {Book.review}</p>
    <div className="mt-4">
            <p className="font-semibold">Tags:</p>
            <div className="flex flex-wrap items-center space-x-2">
              {Book.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <hr className="border border-gray-400 " />

          <p className=" space-x-6"><span>Total Pages</span> <span>{Book.totalPages}</span></p>
          <p className=" space-x-9"><span>Publisher</span> <span>{Book.publisher}</span></p>
          <p className=" space-x-2"><span>Year Of Publishing</span><span>{Book.yearOfPublishing}</span></p>
          <p className=" space-x-12"><span>Rating</span><span>{Book.rating}</span></p>

    <div className="card-actions ">
      <button className="btn">Read</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BooksDetails;