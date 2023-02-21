import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();

        const user = document.getElementById('user1');
        const pass = document.getElementById('pass1');
        
        const info = {
            username: user.value,
            password: pass.value  
        };

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        }
        fetch('/user/login', options)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            // if valid go to home
            if(data.err) {
                alert('Incorrect username or password');
                const form = document.getElementById('login-form')
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
                <form onSubmit={submit} id="login-form">
                    <label>Username: </label><br/>
                    <input type="text" placeholder="user1234" id="user1" /><br/>
                    <label>Password: </label><br/>
                    <input type="text" placeholder="qwerty" id="pass1" /><br/>
                    <input type="submit" value="Login" /><br/>
                    <Link to="/signup">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;