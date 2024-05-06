"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Tables } from "../../../../database.types";
import { Button } from "../../../../components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { formartDate } from "../../../../lib/utils";
import { DatabaseUser, IRespondBooking } from "../../../../types/common";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

export interface IMyRequest extends Tables<"requests"> {
  posting: {
    id: Tables<"postings">["id"];
    is_booked: Tables<"postings">["is_booked"];
    seller_id: Tables<"postings">["seller_id"];
    price: Tables<"postings">["price"];
    category: Tables<"postings">["category"];
    city_id: Tables<"postings">["city_id"];
    name: Tables<"postings">["name"];
    user: DatabaseUser;
  };
  user: DatabaseUser;
}

interface IColumnProps {
  respondToBooking: (respondBooking: IRespondBooking) => void;
}

export const getCols = ({
  respondToBooking,
}: IColumnProps): ColumnDef<IMyRequest>[] => [
  {
    accessorKey: "user.email",
    header: "Requester Name",
  },
  {
    accessorKey: "posting.name",
    header: "Posting Name",
  },
  // {
  //   accessorKey: "from",
  //   header: "Booking From",
  //   cell: ({ row }) => {
  //     return <div className="">{formartDate(row?.original?.[""])}</div>;
  //   },
  // },
  // {
  //   accessorKey: "to",
  //   header: "Booking to",
  //   cell: ({ row }) => {
  //     return <div className="">{formartDate(row?.original?.["to"])}</div>;
  //   },
  // },
  {
    accessorKey: "posting.price",
    header: "Price",
    cell: ({ row }) => {
      return (
        <div className="font-bold">
          Rs. {row?.original?.["posting"]?.["price"]}
        </div>
      );
    },
  },
  {
    accessorKey: "posting.category",
    header: "Category",
  },
  {
    accessorKey: "created_at",
    header: "Initiated at",
    cell: ({ row }) => {
      return (
        <div className="">{formartDate(row?.original?.["created_at"])}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      if (row?.original?.is_responded) {
        return (
          <div className="flex justify-end gap-4">
            <div className="">Responded</div>
          </div>
        );
      }
      return (
        <div className="flex justify-end gap-4 items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="default"
                  disabled={row?.original?.posting?.is_booked}
                  onClick={() =>
                    respondToBooking({
                      action: "accepted",
                      post_id: row.original?.post_id,
                      request_id: row?.original?.id,
                      seller_id: row?.original?.seller_id,
                      buyer_id: row?.original?.request_from_id,
                    })
                  }>
                  Accept
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {row?.original?.posting?.is_booked
                    ? "The car in this post is already booked."
                    : "Accept this Booking!"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5">
                <Button variant="destructive">Reject</Button>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will not get able to accept this request back.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    respondToBooking({
                      action: "rejected",
                      post_id: row.original?.post_id,
                      request_id: row?.original?.id,
                      seller_id: row?.original?.seller_id,
                      buyer_id: row?.original?.request_from_id,
                    })
                  }>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
