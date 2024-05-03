"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Tables } from "../../database.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Delete, Eye, MoreHorizontal, PenBox } from "lucide-react";

interface IMyPost {
  name: Tables<"postings">["name"];
  price: Tables<"postings">["price"];
  category: Tables<"postings">["category"];
  city: string;
  is_booked: boolean;
  is_available: boolean;
}

export const columns: ColumnDef<IMyPost>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <div className="">Rs. {row.getValue("price")}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "is_booked",
    header: "Is Booked",
  },
  {
    accessorKey: "is_available",
    header: "Available",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0  ">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="text-primary-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="flex items-center gap-2"
              //   onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <Eye /> View Posting
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              <Eye />
              Details
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <PenBox />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Delete /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
