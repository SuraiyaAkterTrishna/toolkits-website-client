import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-16 bg-base-200 text-base-content items-center">
        <div className="mx-auto">
          <span className="footer-title">Information</span>
          <a href="/" className="link link-hover">Site Map </a>
          <a href="/" className="link link-hover">Specials</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Delivery Information</a>
          <a href="/" className="link link-hover">Order History</a>
          <a href="/" className="link link-hover">Privacy Policy</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Customer Service</span>
          <a href="/" className="link link-hover">My Account</a>
          <a href="/" className="link link-hover">New</a>
          <a href="/" className="link link-hover">Gift Cards</a>
          <a href="/" className="link link-hover">Return Policy</a>
          <a href="/" className="link link-hover">Your Orders</a>
          <a href="/" className="link link-hover">Subway</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Let Us Help You</span>
          <a href="/" className="link link-hover">My Orders</a>
          <a href="/" className="link link-hover">Shipping</a>
          <a href="/" className="link link-hover">Amazon Prime</a>
          <a href="/" className="link link-hover">Replacements</a>
          <a href="/" className="link link-hover">Manage</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2022 - All right reserved by Tool Kits Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;