import React from 'react';

const CoffeCard = ({ coffe }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffe
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
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;