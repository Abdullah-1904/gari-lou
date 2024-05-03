"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "..//ui/input";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { City, SupabaseResponse } from "../../types/common";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "../../lib/supabase/browserClient";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const carCategories = [
  "Sedan",
  "Coupe",
  "Sports Car",
  "Station Wagon",
  "Crossover (CUV)",
  "Sport Utility Vehicles (SUVs)",
  "Hatchback",
];

const CarCategory = z.enum([
  "Sedan",
  "Coupe",
  "Sports Car",
  "Station Wagon",
  "Crossover (CUV)",
  "Sport Utility Vehicles (SUVs)",
  "Hatchback",
]);
const formSchema = z.object({
  name: z.string().min(2).max(200),
  category: CarCategory,
  city_id: z.string(),
  description: z.string().min(10).max(500),
  image: z.instanceof(File).optional(),
  price: z.string().min(1),
});

const NewPostDialog = ({ isOpen, onChange }) => {
  const { data: cities, isLoading } = useQuery<SupabaseResponse<City[]>>({
    queryKey: ["cities"],
    queryFn: () =>
      fetch("http://localhost:3000/api/cities").then((res) => res.json()),
  });

  const { userId } = useAuth();

  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "Sedan",
      city_id: "1",
      description: "",
      price: "",
      image: null,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const supabase = createClient();

    if (values.image) {
      const avatarFile = values.image;
      const { data: imageData, error: imageError } = await supabase.storage
        .from("posting-images")
        .upload(
          values.name?.toLowerCase()?.trim()?.replaceAll(" ", "_"),
          avatarFile
        );
      if (imageError) {
        toast("There was an error in uploading this image. Please try again.");
        console.log(imageError);
        return;
      }
      console.log(imageData);
      const { data, error } = await supabase.from("postings").insert([
        {
          name: values.name,
          category: values.category,
          city_id: parseInt(values.city_id),
          description: values.description,
          is_booked: false,
          is_available: true,
          price: parseInt(values.price),
          seller_id: userId,
          image: imageData.path,
        },
      ]);
      if (!error) {
        toast("Error in creating your post!");
      } else {
        // queryClient.invalidateQueries(["post"]);
        toast("Post created successfully");

        // closes the modal
        onChange(false);
      }
    } else {
      const { data, error } = await supabase.from("postings").insert([
        {
          name: values.name,
          category: values.category,
          city_id: parseInt(values.city_id),
          description: values.description,
          is_booked: false,
          is_available: true,
          price: parseInt(values.price),
          seller_id: userId,
        },
      ]);
      if (!error) {
        toast("Error in creating your post!");
      } else {
        // queryClient.invalidateQueries(["post"]);
        toast("Post created successfully");

        // closes the modal
        onChange(false);
      }
    }
  }
  return (
    <Dialog onOpenChange={onChange} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent className="max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Add a Posting</DialogTitle>
          <DialogDescription>
            Create a new post and rent your car out today!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Mehran" {...field} />
                      </FormControl>
                      <FormDescription>Name of your car</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g. 10000"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Price of your car in Ruppees
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city_id"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>City</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        disabled={isLoading}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select City" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectContent>
                            {cities?.data?.map((c) => (
                              <SelectItem key={c?.id} value={c?.id.toString()}>
                                {c?.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select city where your car is available.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select car category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {carCategories?.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select category of your car.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="col-span-1 space-y-2">
              <FormField
                control={form.control}
                name="image"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <Input
                    {...fieldProps}
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      onChange(event.target.files && event.target.files[0])
                    }
                    placeholder="Choose Image"
                  />
                )}
              />
              <FormDescription>Upload you image</FormDescription>
              <FormMessage />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-1 ">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none  "
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Price of your car in Ruppees
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="col-span-full place-content-end">
              <Button type="submit">{"Create"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostDialog;
