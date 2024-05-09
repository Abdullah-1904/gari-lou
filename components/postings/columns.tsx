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

interface IMyPost {
  name: Tables<"postings">["name"];
  price: Tables<"postings">["price"];
  category: Tables<"postings">["category"];
  city: string;
  is_booked: boolean;
  is_available: boolean;
}
interface IColumnProps {
  deletePosting: (id: number) => void;
}
export const getCols = ({
  deletePosting,
}: IColumnProps): ColumnDef<IMyPost>[] => [
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // const queryClient = useQueryClient();

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
            <DropdownMenuItem className="flex items-center gap-2">
              <Eye className="h-4 w-4" /> View Posting
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2">
              <PenBox className="h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5">
                  <Delete className="h-4 w-4" /> Delete
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
                    onClick={() => deletePosting(row?.original["id"])}
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
