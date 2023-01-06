import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, image, name, description, min_quantity, available_quantity, price} = product;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`purchase/${id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Minimum Order Quantity: {min_quantity}</small></p>
                <p><small>Available Quantity: {available_quantity}</small></p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions">
                    <button onClick={() => navigateToServiceDetail(_id)} className="btn btn-primary uppercase">purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;