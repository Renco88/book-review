import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    const [dataLength,setDataLength]=useState(6);

        useEffect (() => {
            fetch("booksList.json")
            .then(res => res.json())
            .then(data=> setBooks(data));

        },[])

    return (
        <div>
            <h3 className="text-4xl font-extrabold text-center">Books:{books.length}</h3>
          <div className="grid md:grid-cols-3 gap-6">
          {
            books.slice(0,dataLength).map(book => <Book key={books.bookId} book={book}></Book>)
        }
          </div>
          <div className={dataLength===books.length && 'hidden'}>
            <button onClick={()=> setDataLength(books.length)} className="btn btn-primary">Show All Books</button>
          </div>
        </div>
     
    );
};

export default Books;