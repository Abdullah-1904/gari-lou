"use client";
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
import Image from "next/image";
import LogoTempImage from "../public/car_listing.png";

interface IPostCard {
  post: Tables<"postings">;
  handleModal: () => void;
}

const PostCard: React.FC<IPostCard> = (props: IPostCard) => {
  const city = cities.find((c) => c.id === props?.post?.city_id);
  return (
    <Card className="col-span-1">
      <CardHeader>
        <Image className="w-full object-cover" alt={""} src={LogoTempImage} />
        {/* <Image
          className="w-full object-cover"
          alt={""}
          src={props?.image}
        /> */}
      </CardHeader>
      <CardHeader>
        <CardTitle>{props?.post?.name}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <Badge>{props?.post?.category as string}</Badge>
            <Badge>{city?.name}</Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>{props?.post?.description}</CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={props.handleModal}>
          Book this car!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
