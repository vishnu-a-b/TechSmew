import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddEditBookForm from './components/AddEditBookForm';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" element={<BookList />} />
            <Route exact path="/book/:id" element={<BookDetails />} />
            <Route exact path="/add" element={<AddEditBookForm />} />
            <Route exact path="/edit/:id" element={<AddEditBookForm />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
