"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Tables } from "../../../../database.types";
import { Button } from "../../../../components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { formartDate } from "../../../../lib/utils";

interface IMyRequest {
  // offer: Tables<"requests">["offer"];
  request_from_id: Tables<"requests">["request_from_id"];
  created_at: Tables<"requests">["created_at"];
  is_negotiable: Tables<"requests">["is_negotiable"];
}

export const columns: ColumnDef<IMyRequest>[] = [
  {
    accessorKey: "request_from_id",
    header: "Requester's Name",
  },
  // {
  //   accessorKey: "offer",
  //   header: "Offer",
  //   cell: ({ row }) => {
  //     return <div className="">Rs. {row.getValue("offer")}</div>;
  //   },
  // },
  {
    accessorKey: "created_at",
    header: "Initiated at",
    cell: ({ row }) => {
      return <div className="">{formartDate(row?.original?.["created_at"])}</div>;
    },
  },
  {
    accessorKey: "is_negotiable",
    header: "Negotiable",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      <div className="flex items-center">
        <Button>Accept</Button>
        <Button variant="destructive">Reject</Button>
      </div>;
    },
  },
];
