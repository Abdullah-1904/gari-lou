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
import { deletePosting } from "../../app/utils/function";
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
} from "../ui/alert-dialog";
import { useQueryClient } from "@tanstack/react-query";

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
      const queryClient = useQueryClient();

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
              <PenBox />
              Edit
            </DropdownMenuItem>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer px-2 py-1.5">
                  <Delete /> Delete
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      deletePosting(row?.original["id"]).then(
                        async () =>
                          await queryClient.invalidateQueries({
                            queryKey: ["posts"],
                          })
                      )
                    }
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
