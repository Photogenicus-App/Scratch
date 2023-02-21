import React from "react";
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();

        const user = document.getElementById('user');
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        
        const newUser = {
            username: user.value,
            email: email.value,
            password: pass.value
            
        };

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        }
        fetch('/user/signup', options)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            // need to redirect to home on succesful post
            if(data.err) {
                alert('Username or email already taken.');
                const form = document.getElementById('signup-form')
                form.reset();
            } else {
                navigate('/home');
            };
        })
    }

    return (
        <div>
            <div id="header">
            <h1>photogenicus Sorcis</h1>
            </div>
            <div>
                <form onSubmit={submit} id="signup-form">
                    <label>Username: </label><br/>
                    <input type="text" placeholder="user1234" id="user" /><br/>
                    <label>Email: </label><br/>
                    <input type="text" placeholder="user123@gmail.com" id="email" /><br/>
                    <label>Password: </label><br/>
                    <input type="text" placeholder="qwerty" id="pass" /><br/>
                    <input type="submit" value="Signup" /><br/>
                </form>
            </div>
        </div>
    )
}

export default Signup;