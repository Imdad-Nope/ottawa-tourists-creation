import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, setUser, signInUsingEmail } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const handleEmail = e => {
        console.log(e)
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        console.log(e)
        setPassword(e.target.value)
    }
    const handleName = e => {
        console.log(e)
        setName(e.target.value)
    }



    const handleRegistration = e => {
        e.preventDefault()
        signInUsingEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };



    const uri = location.state?.from || "home"


    const handleGoogleSign = () => {
        signInUsingGoogle().then(result => {
            setUser(result.user)
            history.push(uri)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="places-data mt-5">
            <form onSubmit={handleRegistration}>
                <input onBlur={handleName} placeholder="Name" />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" />

                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" />
                <input type="submit" />
            </form>
            <div>
                <span className="text-success"> Alreday have an account?</span>
                <Link to="/login"> <button className="bg-light">Login</button></Link>
            </div>
            <br />
            <button onClick={handleGoogleSign}>Google Sign In</button>

        </div>
    );
};

export default Register;