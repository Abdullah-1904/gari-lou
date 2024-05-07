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
import { createClient } from "../../../lib/supabase/browserClient";
import { QueryData } from "@supabase/supabase-js";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import MyPostingsTable from "../../../components/postings/my-postings-table";
import { columns, IMyBooking } from "./components/columns";
import { ApiResponse } from "../../../types/common";
import { Tables } from "../../../database.types";

const supabase = createClient();

const MyBookings = () => {
  
  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery<ApiResponse<IMyBooking[]>>({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(
        (process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000") +
          "/api/bookings"
      ).then((res) => res.json()),
  });

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">My Bookings</h2>
      </div>
      {/* Will display all of my postings */}
      <div className="py-10">
        <p className="mb-6">
          The following are requests made for all your posts.
        </p>
        {
          <MyPostingsTable
            columns={columns}
            isLoading={isLoading}
            data={bookings?.data ?? []}
          />
        }
      </div>
    </div>
  );
};

export default MyBookings;
