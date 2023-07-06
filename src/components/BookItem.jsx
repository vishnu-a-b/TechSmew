import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../redux/bookSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <Link to={`/book/${book.id}`}>
        <strong>{book.title}</strong> by {book.author}
      </Link>
      <button onClick={() => handleDelete(book.id)}>Delete</button>
    </li>
  );
};

export default BookItem;
