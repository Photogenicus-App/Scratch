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