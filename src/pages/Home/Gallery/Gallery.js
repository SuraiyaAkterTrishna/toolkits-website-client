import React from "react";
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='mt-20'>
      <p className='text-5xl font-bold tracking-widest text-primary text-center m-5'>NEW ARRIVALS</p>
      <p className='text-lg text-gray-400 text-center w-2/5 mx-auto'>Hurry up and Get all the latest products that you needs. You can buy this product from here any time any where so purchase now</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-12 gap-5 mx-auto'>
        <div>
          <img className="scalable-img" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/3_2041a84a-8003-41ee-b227-9ee2d8658497.jpg?v=1530766043" alt="" />
        </div>
        <div>
          <img className="scalable-img" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/4_b4bd2ffd-cb80-4a74-801a-0847f469c62b.jpg?v=1530766052" alt="" />
        </div>
        <div>
          <img className="scalable-img" src="https://cdn.shopify.com/s/files/1/0111/9115/6794/files/5_971baf50-c451-480c-9404-d781663509f8.jpg?v=1530766062" alt="" />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
