"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Tables } from "../../../../database.types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../../../../components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { cn } from "../../../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../../../components/ui/calendar";
import PostDetail from "./post-details";
import { useMutation } from "@tanstack/react-query";
import { ICreateNewBooking } from "../../../../types/common";
import { useAuth } from "@clerk/nextjs";

interface ICreateBookingModal {
  modalState: {
    isOpen: boolean;
    post: Tables<"postings"> | null;
  };
  onChange: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      post: Tables<"postings"> | null;
    }>
  >;
}

const FormSchema = z.object({
  to: z.date({
    required_error: "When do you need it from",
  }),
  from: z.date({
    required_error: "When do you need it till.",
  }),
});

const CreateBookingModal: React.FC<ICreateBookingModal> = ({
  modalState,
  onChange,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { userId } = useAuth();

  const bookingMutation = useMutation({
    mutationFn: (newBooking: ICreateNewBooking) => {
      return fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newBooking),
      });
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await bookingMutation.mutateAsync(
      {
        from: data?.from?.toISOString(),
        to: data?.to.toISOString(),
        post_id: modalState?.post?.id,
        request_id_from: userId,
      },
      {
        onSuccess: () => {
          onChange({
            isOpen: false,
            post: null,
          });
          toast({
            title: "Booking Successfull created",
          });
        },
        onError: () =>
          toast({
            title: "There was an error in creating your booking!",
          }),
      }
    );
  }
  return (
    <Dialog
      onOpenChange={() =>
        onChange({
          isOpen: false,
          post: null,
        })
      }
      open={modalState.isOpen}
      modal
      defaultOpen={modalState.isOpen}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Create Booking</DialogTitle>
          <DialogDescription>Confirm the booking</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-5">
            {modalState?.post && <PostDetail item={modalState?.post} />}
            <div className="space-y-8 col-span-1">
              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      You can choose from today to any date.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < form.getValues("from") ||
                            date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      You can choose from today to any date.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="justify-end flex col-span-full mt-4">
              <Button disabled={bookingMutation.isPending} type="submit">
                {bookingMutation.isPending ? "Loading..." : "Book!"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBookingModal;
