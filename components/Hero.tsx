import React from "react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(/hero_bg.jpeg)",
      }}
    >
      {/* <div className=" bg-opacity-60"></div> */}
      <div className=" text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold text-white ">
            Welcome to Our Car Rental Service
          </h1>
          <p className="mb-5" style={{ color: "white" }}>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started!</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
