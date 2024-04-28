import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero_bg.jpeg)",
      }}
    >
      <div className=" bg-opacity-60"></div>
      <div className=" text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Welcome to Our Car Rental Service!
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
