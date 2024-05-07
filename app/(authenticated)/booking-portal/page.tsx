"use client";
import React from "react";
import BookingPortalSearch from "../../../components/booking-portal-search";
import PostCard from "../../../components/post-card";
import { useQuery } from "@tanstack/react-query";
import { SupabaseResponse } from "../../../types/common";
import { Tables } from "../../../database.types";
import CreateBookingModal from "./components/create-booking-dialog";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

const BookingPortal = () => {
  const { data: postings, isLoading } = useQuery<
    SupabaseResponse<Tables<"postings">[]>
  >({
    queryKey: ["all-postings"],
    queryFn: () =>
      fetch(
        (process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000") +
          "/api/postings"
      ).then((res) => res.json()),
  });

  const [modalState, setModalState] = React.useState<{
    isOpen: boolean;
    post: Tables<"postings"> | null;
  }>({
    isOpen: false,
    post: null,
  });

  const handleModal = (post: Tables<"postings">, val: boolean) => {
    setModalState({
      isOpen: val,
      post,
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">Available Cars</h2>
      <p className="my-5 text-normal">
        Check out all the great bookings on Gari-Lou
      </p>

      <BookingPortalSearch />

      <div className="grid grid-cols-3 gap-6 mt-5">
        {isLoading
          ? [0, 1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="col-span-1 animate-pulse">
                <CardHeader>
                  <div className="object-contain w-full rounded-md bg-slate-700"></div>
                </CardHeader>
                <CardContent>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          : postings?.data?.map((post) => (
              <PostCard
                key={post?.id}
                handleModal={() => handleModal(post, true)}
                post={post}
              />
            ))}
      </div>
      <CreateBookingModal modalState={modalState} onChange={setModalState} />
    </div>
  );
};

export default BookingPortal;
