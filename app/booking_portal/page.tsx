import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center py-6 text-white">
        <h1>Welcome to booking page</h1>
      </div>
      <div className="flex h-screen justify-center items-center">
        <div className="join">
          <select
            className="select select-bordered join-item"
            defaultValue="Select City"
          >
            <option disabled>Select City</option>
            <option>Islamabad</option>
            <option>Lahore</option>
            <option>Karachi</option>
          </select>

          <select
            className="select select-bordered join-item"
            defaultValue="Car Category"
          >
            <option disabled>Car Category</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Pick-Up</option>
          </select>

          <input
            type="date"
            className="select select-bordered join-item"
            placeholder="Pickup Date"
          />

          <input
            type="date"
            className="select select-bordered join-item"
            placeholder="Dropoff Date"
          />

          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
