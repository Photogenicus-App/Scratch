import React from "react";

const Signup = () => {
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
                <form onSubmit={}>
                    <label>Username: </label><br/>
                    <input type="text" placeholder="user123"></input><br/>
                    <label>Password: </label><br/>
                    <input type="text" placeholder="qwerty"></input><br/>
                    <input type="submit">Sign Up</input><br/>
                </form>
            </div>
        </div>
    )
}

export default Signup;