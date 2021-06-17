import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    //allows us to change the url programatically
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //successfully created a new user using an email and password
                if (auth) {
                    history.push('/')
                }
                
                console.log(auth);
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <Link to='/'>
                <img
                className="login__logo"
                src="https://i.postimg.cc/wTjMNCxk/5476406527-ab82ecf3-a46b-4899-a4f8-5c6b721d4ce5.png" 
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} />
                    
                    
                    <button onClick={signIn} type="submit"
                    //trigger a function when signing in
                    className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing in you aggree to UzzaTech's 
                    Conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice 
                    and our Internet-Based Ads
                    Notice!
                </p>

                <button onClick={register} type="submit"
                className="login__registerButton">Create your UzzaTech Acount</button>
            </div>
        </div>
    );
}

export default Login;
