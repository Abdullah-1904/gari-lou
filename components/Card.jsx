import Image from "next/image";
import React from "react";

const Card = ({ image, cardTitle, description, tags, badge, className }) => {
  return (
    <div
      className={
        className
          ? className
          : "card w-96 bg-primary text-primary-content shadow-xl " + className
      }
    >
      <figure>
        <Image src={image} alt="Shoes" className="h-40 w-40 object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {cardTitle}
          <div className="badge badge-secondary">{badge || "New"}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags?.map((tag) => (
            <div className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
