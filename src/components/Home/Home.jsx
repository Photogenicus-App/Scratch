import React from 'react';
import Library from './Library.jsx';

// landing page, will render library
function Home() {

  return (
    <div id="page-container">
      <div id="header">
        <h1>photogenicus Sorcis</h1>
      </div>

      <div>

        <Library />
      </div>
    </div>
  );
}

export default Home;
