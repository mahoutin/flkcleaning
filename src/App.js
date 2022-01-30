import React from 'react';
//pluging
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

//components
import Home from './Pages/Home/Home';

//styling
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

