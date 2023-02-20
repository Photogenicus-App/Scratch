import React from "react";
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({values: event.target})
        }
        fetch('/user/signup', options)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            // need to redirect to home on succesful post
            navigate('/home')
        })
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
                    <label>Username: </label><br/>
                    <input type="text" placeholder="user123" /><br/>
                    <label>Password: </label><br/>
                    <input type="text" placeholder="qwerty" /><br/>
                    <input type="submit" value="Sign up" /><br/>
                </form>
            </div>
        </div>
    )
}

export default Signup;