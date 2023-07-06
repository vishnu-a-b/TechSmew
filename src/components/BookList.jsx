import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, deleteBook } from "../redux/bookSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-6 Card">
              <div className="myCard">
                <Link to={`/book/${book.id}`}>
                  <h3>{book.title}</h3> 
                  
                </Link>
                <p>{book.body}</p>
                <div className="by"><h6>Author : Vishnu</h6><button onClick={() => handleDelete(book.id)}>Delete</button></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/add">Add New Book</Link>
    </div>
  );
};

export default BookList;
