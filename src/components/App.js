// rafce
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../index.css';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Home from './Home/Home';
import AddLibrary from './AddLibrary';
import IndividualLibrary from './IndividualLibrary';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-library" element={<AddLibrary />} />
          <Route path="/:id" element={<IndividualLibrary />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
