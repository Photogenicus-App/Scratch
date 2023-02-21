import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddLibrary = () => {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();

    const title = document.getElementById('title');
    const desc = document.getElementById('desc');
    const content = document.getElementById('content');

    const newLibrary = {
      title: title.value,
      description: desc.value,
      studyMaterial: content.value,
    };

    console.log(newLibrary);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLibrary),
    };

    fetch('/data/library', options)
      .then((data) => data.json())
      .then((data, err) => {
        if (data.err) {
          alert('Invalid input(s)');
          const form = document.getElementById('add-form');
          form.reset();
        } else {
          navigate('/home');
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={submit} id="add-form">
          <label>Title: </label>
          <br />
          <input type="text" placeholder="Topic" id="title" />
          <br />
          <label>Description: </label>
          <br />
          <input type="text" placeholder="Describe this library" id="desc" />
          <br />
          <label>Content: </label>
          <br />
          <textarea placeholder="Resources" id="content" />
          <br />
          <input
            type="submit"
            value="Add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          />
        </form>
        <br />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate('/home')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddLibrary;
