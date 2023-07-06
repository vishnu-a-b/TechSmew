import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  // Add initial state for books
  preloadedState: {
    books: {
      books: [],
      loading: false,
      error: null,
    },
  },
});

export default store;
