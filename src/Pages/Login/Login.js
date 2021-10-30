import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = e => {
        console.log(e.target.value);
    };
    return (
        <div className="places-data mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} name="" id="" placeholder="Email" />

                <input type="password" {...register("password")} name="" id="" placeholder="Password" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;