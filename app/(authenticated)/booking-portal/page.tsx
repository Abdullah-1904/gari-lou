"use client";
import React from "react";
import BookingPortalSearch from "../../../components/booking-portal-search";
import PostCard from "../../../components/post-card";
import { useQuery } from "@tanstack/react-query";
import { SupabaseResponse } from "../../../types/common";
import { Tables } from "../../../database.types";
import CreateBookingModal from "./components/create-booking-dialog";

const BookingPortal = () => {
  const { data: postings, isLoading } = useQuery<
    SupabaseResponse<Tables<"postings">[]>
  >({
    queryKey: ["all-postings"],
    queryFn: () =>
      fetch("http://localhost:3000/api/postings").then((res) => res.json()),
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
      <h1 className="text-4xl font-medium">All available Cars</h1>
      <p className="my-5 text-normal">
        Check out all the great bookings on Gari-Lou
      </p>

      <BookingPortalSearch />

      <div className="grid grid-cols-3 gap-6 mt-5">
        {postings?.data?.map((post) => (
          <PostCard
            key={post?.id}
            handleModal={() => handleModal(post, true)}
            post={post}
          />
        ))}
      </div>
      <CreateBookingModal
        modalState={modalState}
        onChange={setModalState}
      />
    </div>
  );
};

export default BookingPortal;
