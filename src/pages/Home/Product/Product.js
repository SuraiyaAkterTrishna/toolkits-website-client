import React from 'react';

const Product = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Product Name</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p><small>Minimum Order Quantity: 100</small></p>
                <p><small>Available Quantity: 1000</small></p>
                <p><small>Price: $500</small></p>
                <div class="card-actions">
                    <button class="btn btn-primary uppercase">purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;