import React from 'react';
import './App.css';
import { Router } from "react-router-dom";
import { Routes } from './routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <nav className="navbar navbar-dark bg-primary">
    <img src="./NotesApp.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
    Notes App
    </nav>
      <Routes />
    </Router>
  );
}

export default App;
