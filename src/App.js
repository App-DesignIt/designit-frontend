import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <Header></Header>
      </div>
    </Router>
  );
}

export default App;