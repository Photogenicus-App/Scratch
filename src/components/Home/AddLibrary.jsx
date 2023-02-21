import React from "react";

const AddLibrary = () => {

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
        .then((data) => console.log(data))
    }

    return (
        <div>
            <header>
                <ul>
                    <li>header-item1</li>
                    <li>header-item2</li>
                    <li>header-item3</li>
                </ul>
            </header>
            <div>
                <form onSubmit={submit}>
                    <label>Title: </label><br/>
                    <input type="text" placeholder="Topic" id="title" /><br/>
                    <label>Description: </label><br/>
                    <input type="text" placeholder="Describe this library" id='desc' /><br/>
                    <label>Content: </label><br/>
                    <textarea placeholder="Resources" id="content" /><br/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default AddLibrary;