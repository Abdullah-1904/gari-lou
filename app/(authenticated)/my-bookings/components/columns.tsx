"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Button } from "../../../../components/ui/button";
import {
  ClipboardCopyIcon,
  Delete,
  Eye,
  MoreHorizontal,
  PenBox,
} from "lucide-react";
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
import { Tables } from "../../../../database.types";
import { DatabaseUser } from "../../../../types/common";
import { cities } from "../../../../constants/data";
import { ReactNode } from "react";
import { Badge } from "../../../../components/ui/badge";
import { cn, formartDate } from "../../../../lib/utils";
import { toast } from "sonner";

export interface IMyBooking extends Tables<"bookings"> {
  posting: {
    id: Tables<"postings">["id"];
    seller_id: Tables<"postings">["seller_id"];
    price: Tables<"postings">["price"];
    category: Tables<"postings">["category"];
    city_id: Tables<"postings">["city_id"];
    name: Tables<"postings">["name"];
    user: DatabaseUser;
  };
  user: DatabaseUser;
}


export const columns: ColumnDef<IMyBooking>[] = [
  {
    accessorKey: "posting.name",
    header: "Name",
  },
  {
    accessorKey: "created_at",
    header: "Booking Created",
    cell: ({ row }) => {
      return (
        <div className="">{formartDate(row?.original?.["created_at"])}</div>
      );
    },
  },
  {
    accessorKey: "from",
    header: "Booking From",
    cell: ({ row }) => {
      return <div className="">{formartDate(row?.original?.["from"])}</div>;
    },
  },
  {
    accessorKey: "to",
    header: "Booking to",
    cell: ({ row }) => {
      return <div className="">{formartDate(row?.original?.["to"])}</div>;
    },
  },
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row, renderValue }) => {
      let className = "";
      switch (row?.original["status"]) {
        case "accepted":
          className = "bg-green-500 text-white";
          break;
        case "pending":
          className = "bg-yellow-500 text-black";
          break;
        case "rejected":
          className = "bg-red-500 text-white";
          break;
      }
      return (
        <Badge className={cn(className, "capitalize")}>
          {row?.original["status"]}
        </Badge>
      );
    },
  },
  {
    accessorKey: "posting.city_id",
    header: "City",
    cell: ({ row }) => {
      const city = cities.find(
        (c) => c.id === row?.original?.["posting"]?.["city_id"]
      );
      return <div className="">{city?.name}</div>;
    },
  },
  {
    accessorKey: "posting.user.email",
    header: "Owner Email",
    cell: ({ row }) => {
      return (
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(
              row?.original?.["posting"]?.["user"]?.["email"]
            );
            toast("Copied");
          }}>
          <ClipboardCopyIcon className="h-4 w-4 group-hover:scale-110 group-hover:text-gray-600 transition-all duration-300" />
          {row?.original?.["posting"]?.["user"]?.["email"]}
        </div>
      );
    },
  },
];
