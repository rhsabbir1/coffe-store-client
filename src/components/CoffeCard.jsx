import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeCard = ({ coffe }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffe

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your coffe has been deleted.',
                                'success'
                              )
                        }

                    })
            }
        })
    }


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album" /></figure>
            <div className="flex w-full justify-between p-4 ">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Taste : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-1">
                        <button className="btn">View</button>
                        <button className="btn"><Link to={`updatecoffe/${_id}`}>Edit</Link></button>  
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;


