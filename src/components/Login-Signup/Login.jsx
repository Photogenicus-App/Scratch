import React from "react";
import { Link } from "react-router-dom"

const Login = () => {

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