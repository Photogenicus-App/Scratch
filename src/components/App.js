// rafce
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../index.css';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Home from './Home/Home';
import AddLibrary from './Home/AddLibrary';
import IndividualLibrary from './IndividualLibrary';

const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-library" element={<AddLibrary />} />
        <Route path="/:id" element={<IndividualLibrary />} />
      </Routes>
    </div>
  )
}

export default App;
