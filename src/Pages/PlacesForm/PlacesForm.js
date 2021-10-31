import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './PlacesForm.css'
const PlacesForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://damp-bastion-12491.herokuapp.com/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submitted successfully')
                    reset();
                }
            })
    };
    return (
        <div className="places-data mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} placeholder="Name" />
                <input {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />

                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlacesForm;