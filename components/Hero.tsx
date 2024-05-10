import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
const images = ["/hero2.jpg", "/hero3.jpg", "/hero4.jpg", "/hero6.jpg"]; // Replace with your image paths

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switches image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);
  return (
    <div
      className="hero min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* <div className=" bg-opacity-60"></div> */}
      <div className=" text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold text-white ">
            Welcome to Our Car Rental Service
          </h1>
          {/* <p className="mb-5" style={{ color: "white" }}>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <Button>
            <Link href="/howtobook"> Get Started!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
