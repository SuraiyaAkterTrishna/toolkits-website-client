import React from "react";
import './Banner.css';


const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0111/9115/6794/files/5_e1ba36e4-94a2-42ce-9f91-7ec1ec5431e8.jpg?v=1530000871)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="mr-96 text-neutral-content">
            <h1 className="mb-5 text-3xl font-bold big-sale">Big Sale</h1>
            <h1 className="mb-5 text-5xl font-bold">Hand Tools</h1>
            <h1 className="mb-5 text-5xl font-bold">Power Saw Machine</h1>
            <button className="btn btn-primary">PURCHASE NOW</button>
        </div>
      </div>{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0111/9115/6794/files/6_7aae7738-bad8-4a78-a1d2-d998070504da.jpg?v=1530000896)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="mr-96 text-neutral-content">
            <h1 className="mb-5 text-3xl font-bold big-sale">Big Sale</h1>
            <h1 className="mb-5 text-5xl font-bold">Hand Tools</h1>
            <h1 className="mb-5 text-5xl font-bold">Wood Cutter</h1>
            <button className="btn btn-primary">PURCHASE NOW</button>
        </div>
      </div>{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
