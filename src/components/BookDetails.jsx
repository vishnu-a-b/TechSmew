import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    const selectedBook = books.find(book => book.id === Number(id));
    setBook(selectedBook);
  }, [books, id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h2>Book Details</h2>
      <p>
        <strong>Title:</strong> {book.title}
      </p>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.body}
      </p>
      <Link to={`/edit/${id}`}>Edit</Link><br />
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

export default BookDetails;
