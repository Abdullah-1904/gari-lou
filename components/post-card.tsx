import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tables } from "../database.types";
import { Badge } from "./ui/badge";
import { cities } from "../constants/data";

const PostCard: React.FC<Tables<"postings">> = (props) => {
  const city = cities.find((c) => c.id === props?.city_id);
  return (
    <Card className="col-span-1">
      <CardHeader>
        <img className="w-full object-cover" src="./car_listing.png" />
        {/* <img className="w-full object-cover" src={props?.image} /> */}
      </CardHeader>
      <CardHeader>
        <CardTitle>{props?.name}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <Badge>{props?.category}</Badge>
            <Badge>{city?.name}</Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>{props?.description}</CardContent>
      <CardFooter className="flex justify-end">
        <Button className="text-secondary-foreground bg-secondary">Book</Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
