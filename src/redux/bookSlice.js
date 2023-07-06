import { createSlice } from '@reduxjs/toolkit';
import { fetchBooksAPI, addBookAPI, editBookAPI, deleteBookAPI } from '../api/bookAPI';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBooksStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess(state, action) {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchBooksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addBookSuccess(state, action) {
      state.books.push(action.payload);
    },
    editBookSuccess(state, action) {
      const { id, book } = action.payload;
      const index = state.books.findIndex(b => b.id === id);
      if (index !== -1) {
        state.books[index] = { id, ...book };
      }
    },
    deleteBookSuccess(state, action) {
      const id = action.payload;
      state.books = state.books.filter(book => book.id !== id);
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure,
  addBookSuccess,
  editBookSuccess,
  deleteBookSuccess,
  setError,
  clearError,
} = bookSlice.actions;

export const fetchBooks = () => async dispatch => {
  try {
    dispatch(fetchBooksStart());
    const books = await fetchBooksAPI();
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

export const addBook = book => async dispatch => {
  try {
    const newBook = await addBookAPI(book);
    dispatch(addBookSuccess(newBook));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const editBook = (id, book) => async dispatch => {
  try {
    const updatedBook = await editBookAPI(id, book);
    dispatch(editBookSuccess({ id, book: updatedBook }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deleteBook = id => async dispatch => {
  try {
    await deleteBookAPI(id);
    dispatch(deleteBookSuccess(id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default bookSlice.reducer;
