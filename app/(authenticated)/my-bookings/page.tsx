"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

const My_bookings = () => {
  return (
    <div className="flex item-center flex-wrap gap-6">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Name of the car</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="car">Car</Label>
                <Input id="car" placeholder="Car model" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Car Category</Label>
                <Input id="category" placeholder="Car Category" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Location">City located</Label>
                <Input id="Location" placeholder="Car Location" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="img">Image</Label>
                <Input id="img" placeholder="Car image" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button>Book this car</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default My_bookings;
