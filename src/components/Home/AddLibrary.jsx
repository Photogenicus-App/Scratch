import React from "react";
import { useNavigate } from "react-router-dom";

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
            studyMaterial: content.value
        };

        console.log(newLibrary);

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newLibrary)
        }

        fetch('/data/library', options)
        .then((data) => data.json())
        .then((data, err) => {
            if(data.err) {
                alert('Invalid input(s)');
                const form = document.getElementById('add-form')
                form.reset();
            } else {
                navigate('/home');
            };
        })
    }

    return (
        <div>
            <form onSubmit={submit} id="add-form">
                <label>Title: </label><br/>
                <input type="text" placeholder="Topic" id="title" /><br/>
                <label>Description: </label><br/>
                <input type="text" placeholder="Describe this library" id='desc' /><br/>
                <label>Content: </label><br/>
                <textarea placeholder="Resources" id="content" /><br/>
                <input type="submit" value="Add" />
            </form>
            <button onClick={() => navigate('/home')}>
                Cancel
            </button>
        </div>
    )
}

export default AddLibrary;