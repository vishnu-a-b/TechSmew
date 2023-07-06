import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addBook, editBook } from "../redux/bookSlice";

const AddEditBookForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (id) {
      const book = books.find((book) => book.id === Number(id));
      if (book) {
        setTitle(book.title);
        setAuthor("vishnu");
        setDescription(book.body);
      }
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      userId: 1,
      title : title,
      body : description,
    };

    if (id) {
      dispatch(editBook(Number(id), newBook));
    } else {
      dispatch(addBook(newBook));
    }

    history("/");
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Book" : "Add New Book"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddEditBookForm;
