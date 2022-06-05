import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

const Booking = () => {
    const { bookId } = useParams()
    const [books, setBooks] = useState({});
    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch(`https://damp-bastion-12491.herokuapp.com/choosedPlace/${bookId}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // console.log(books)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = email;

        fetch('https://damp-bastion-12491.herokuapp.com/bidConfirm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        console.log(data)
    }

    return (
        <div className="places-data mt-5">
            <div>
                <img src={books?.img} alt="" />
                <h6>Name: {books?.name}</h6>
                <span>Price: {books?.price}</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} defaultValue={books?.name} placeholder="Name" />
                <input {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />

                <input type="number" {...register("price")} defaultValue={books?.price} placeholder="Price" />
                <input {...register("img")} defaultValue={books?.img} placeholder="Image url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Booking;