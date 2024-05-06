import { auth } from "@clerk/nextjs";
import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";
import { ICreateNewBooking } from "../../../types/common";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.redirect(new URL("/sign-in", request.url));
  const res: ICreateNewBooking = await request.json();

  // first create row in request table
  const { data, error } = await supabaseServiceRole.from("requests").insert([
    {
      request_from_id: res.request_id_from,
      post_id: res.post_id,
    },
  ]);

  // create pending booking in bookings table
  const { data: bookingsData, error: bookingsError } = await supabaseServiceRole
    .from("bookings")
    .insert([
      {
        post_id: res.post_id,
        buyer_id: res.request_id_from,
        to: res.to,
        from: res.from,
        status: "pending",
      },
    ]);

  return Response.json(bookingsData);
}