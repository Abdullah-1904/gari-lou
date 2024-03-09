import React from "react";
import CarRecommendations from "../public/All_in_one_2.png";
import CarListing from "../public/car_listing.png";
import CarRent from "../public/rent_your_car.png";
import Card from "./Card";

const cards = [
  {
    image: CarRecommendations,
    cardTitle: "Best car recommendations",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Fast", "Accurate", "Sexy"],
  },
  {
    image: CarListing,
    cardTitle: "The most complete list of cars",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Complete", "Accurate", "Sexy"],
  },
  {
    image: CarRent,
    cardTitle: "Rent your car out!",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Safe", "Secure", "Sexy"],
  },
];

const Offerings = () => {
  return (
    <section className="flex  gap-8 items-center flex-wrap mt-20 min-h-screen">
      {cards.map((card) => (
        <Card key={card?.cardTitle} {...card} />
      ))}
    </section>
  );
};

export default Offerings;
