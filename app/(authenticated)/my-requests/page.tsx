"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import MyPostingsTable from "../../../components/postings/my-postings-table";
import { createClient } from "../../../lib/supabase/browserClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cities } from "../../../constants/data";
import { useAuth } from "@clerk/nextjs";
import { getCols, IMyRequest } from "./components/columns";
import { ApiResponse, IRespondBooking } from "../../../types/common";
import { toast } from "../../../components/ui/use-toast";

const supabase = createClient();

const MyRequests = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useQuery<ApiResponse<IMyRequest[]>>({
    queryKey: ["requests"],
    queryFn: () =>
      fetch("http://localhost:3000/api/requests").then((res) => res.json()),
  });
  const queryClient = useQueryClient();

  const respondBookingMutation = useMutation({
    mutationFn: (respondBooking: IRespondBooking) => {
      return fetch("http://localhost:3000/api/respond-booking", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(respondBooking),
      });
    },
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
            columns={getCols({
              respondToBooking: async (respondBooking: IRespondBooking) => {
                respondBookingMutation.mutate(
                  {
                    ...respondBooking,
                  },
                  {
                    onSuccess: async () => {
                      toast({
                        title: `Request was succesfully ${respondBooking?.action}`,
                      });
                      await queryClient.invalidateQueries({
                        queryKey: ["requests"],
                      });
                    },
                    onError: () =>
                      toast({
                        title:
                          "There was an error in responding to the request!",
                      }),
                  }
                );
              },
            })}
            data={requests?.data ?? []}
          />
        }
      </div>
    </div>
  );
};

export default MyRequests;
