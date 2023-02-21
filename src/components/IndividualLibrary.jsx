import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Library component, will render the boxes of library info
function IndividualLibrary() {

  // define const location given the value of the result from invoking useLocation; will be used to grab state and params id of recipe
  const location = useLocation();

  // grab our libraries from state passed from link
  const libraries = location.state.libraries;

  // we now have our libraries in an array, use find to grab the one that fits our id
  const foundLibrary = libraries.find(libr => libr._id === location.state.libId);

  console.log(foundLibrary);

  // using useState define state for our library props and an edit
  const [title, setTitle] = useState(foundLibrary.title);
  const [description, setDescription] = useState(foundLibrary.description);
  const [studyMaterial, setStudyMaterial] = useState(foundLibrary.studyMaterial);
  const [edit, setEdit] = useState(false);

  // define a function to change edit to rerender our library with inputs
  const handleEditButton = function() {
    setEdit(true);
  };

  // send a put request for library
  const handleSaveEdit = function() {
    // define our updated library to send in request
    const updatedLibrary = {
      _id: foundLibrary._id,
      title: title,
      description: description,
      studyMaterial: studyMaterial
    };

    // then we make a put request to proper url sending our updated library
    fetch('/data/library', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedLibrary),
    })
    // decide what we want to do after update

    // reassign edit to false so we render w changes
    setEdit(false)
  };

  if(!edit) {
    return (
      <div id="page-container">
        <div id="header">
          <h1>photogenicus Sorcis</h1>
        </div>

        <div>
          <h1>
            {title}
          </h1>
  
          <h5>
            {description}
          </h5>
  
          <p>
            {studyMaterial}
          </p>
        </div>
  
        <button onClick={handleEditButton}>
          edit
        </button>
      </div>
    )} else {
      return (
        <div id="page-container">
          <div id="header">
            <h1>photogenicus Sorcis</h1>
          </div>

          <div>
            <h1>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </h1>

            <h5>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </h5>
  
            <p>
              <input
                value={studyMaterial}
                onChange={(e) => setStudyMaterial(e.target.value)}
              />
            </p>
          </div>

          <button onClick={() => setEdit(false)}>
            cancel
          </button>
    
          <button onClick={handleSaveEdit}>
            save
          </button>
        </div>
      )
  }
}

export default IndividualLibrary;