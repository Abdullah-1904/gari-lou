"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import MyPostingsTable from "../../../components/postings/my-postings-table";
import { createClient } from "../../../lib/supabase/browserClient";
import { useQuery } from "@tanstack/react-query";
import { cities } from "../../../constants/data";
import { useAuth } from "@clerk/nextjs";
import { columns } from "./components/columns";

const supabase = createClient();

const fetchRequests = async (user_id: string) => {
  const { data, error } = await supabase
    .from("requests")
    .select(
      `
      *,
      posting:post_id (
        id,
        seller_id
      )
    `
    ) // Joining with postings table on post_id
    .eq("seller_id", user_id); // Filtering based on seller_id in the postings table

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

const MyRequests = () => {
  const { userId } = useAuth();
  const {
    data: requests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: () => fetchRequests(userId),
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">My Requests</h2>
      </div>
      {/* Will display all of my postings */}
      <div className="py-10">
        <p className="mb-6">
          The following are requests made for all your posts.
        </p>
        {
          <MyPostingsTable
            isLoading={isLoading}
            columns={columns}
            data={requests ?? []}
          />
        }
      </div>
    </div>
  );
};

export default MyRequests;

/**
 * ?.map((request) => ({
              request_from_id: request.request_from_id,
              
            }))
 */
