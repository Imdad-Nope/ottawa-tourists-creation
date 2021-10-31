import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit } = useForm();
    const onSubmit = e => {
        console.log(e.target.value);
    };

    const uri = location.state?.from || "home"

    const handleEmail = e => {
        console.log(e)
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        console.log(e)
        setPassword(e.target.value)
    }


    const handleRegistration = e => {
        e.preventDefault()
    }

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

                <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" />

                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" />
                <input type="submit" />
            </form>
            <div>
                <span className="text-danger"> Didn'nt create account yet? </span>
                <Link to="/register"><button className="bg-light">Register</button></Link>
            </div>
            <br />
            <button onClick={handleGoogleSign}>Google Sign In</button>

        </div>
    );
};

export default Login;