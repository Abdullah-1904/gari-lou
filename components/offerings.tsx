import React from "react";
import CarRecommendations from "../public/All_in_one_2.png";
import CarListing from "../public/car_listing.png";
import CarRent from "../public/rent_your_car.png";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const cards = [
  {
    image: CarRecommendations,
    cardTitle: "Best car recommendations",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Fast", "Accurate", "Reliable"],
  },
  {
    image: CarListing,
    cardTitle: "The most complete list of cars",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Complete", "Accurate", "Extensive"],
  },
  {
    image: CarRent,
    cardTitle: "Rent your car out!",
    description:
      "LoreAute est anim labore pariatur ea nostrud proident. Eu amet Lorem laboris anim amet aliqua labore. Eiusmod consequat aliqua irure incididunt et ea. Ea elit anim aliqua ipsum dolor velit cupidatat dolor cupidatat consectetur incididunt consequat aute.",
    tags: ["Safe", "Secure", "Hassle free"],
  },
];

const Offerings = () => {
  return (
    <section className="flex justify-center gap-6 items-center flex-wrap mt-20 ">
      {cards.map((card) => (
        <Card key={card.cardTitle} className="w-[350px]">
          <CardHeader>
            <CardTitle>{card?.cardTitle}</CardTitle>
            <CardDescription>{card?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 item-center flex-wrap">
              {card.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Offerings;
