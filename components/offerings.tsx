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
import Link from "next/link";

const cards = [
  {
    image: "CarRecommendations",
    cardTitle: "Best Car Recommendations",
    description:
      "Discover the ideal vehicle for your needs with our personalized recommendations.\nOur advanced algorithm ensures Fast, Accurate and Reliable suggestions.",
    tags: ["Fast", "Accurate", "Reliable"],
  },
  {
    image: CarListing,
    cardTitle: "The Most Complete List of Cars",
    description:
      "Explore our extensive collection of cars, ranging from economy to luxury models \n Find the perfect match with our Complete, Accurate, and Extensive listings",
    tags: ["Learn More", "Browse", "Explore"],
  },
  {
    image: CarRent,
    cardTitle: "Rent Your Car Out!",
    description:
      "Earn money by renting out your car securely through our platform \n Enjoy a Safe, Secure, and Hassle-Free process with our comprehensive support",
    tags: ["List Your Car", "Start Earning", "Hassle free"],
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
            <Button>
              <Link href="/dashboard">Try out</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Offerings;
