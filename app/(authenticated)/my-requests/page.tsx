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

const MyRequests = () => {
  const { userId } = useAuth();
  const {
    data: requests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: () =>
      fetch("http://localhost:3000/api/requests").then((res) => res.json()),
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
