import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div>
            <p className='text-5xl font-bold tracking-widest text-center m-5'>LATEST PRODUCT</p>
            <p className='text-lg text-center w-2/5 mx-auto'>All latest product are now available for you and your can buy this product from here any time any where so purchase now</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default Products;