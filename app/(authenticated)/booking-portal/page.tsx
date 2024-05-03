"use client";
import React from "react";
import BookingPortalSearch from "../../../components/booking-portal-search";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import PostCard from "../../../components/post-card";
import { useQuery } from "@tanstack/react-query";
import { SupabaseResponse } from "../../../types/common";
import { Tables } from "../../../database.types";

const BookingPortal = () => {
  const { data: postings, isLoading } = useQuery<
    SupabaseResponse<Tables<"postings">[]>
  >({
    queryKey: ["all-postings"],
    queryFn: () =>
      fetch("http://localhost:3000/api/postings").then((res) => res.json()),
  });
  return (
    <div>
      <h1 className="text-4xl font-medium">All available Cars</h1>
      <p className="my-5 text-normal">
        Check out all the great bookings on Gari-Lou
      </p>

      <BookingPortalSearch />

      <div className="grid grid-cols-3 gap-6 mt-5">
        {postings?.data?.map((post) => (
          <PostCard key={post?.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BookingPortal;
