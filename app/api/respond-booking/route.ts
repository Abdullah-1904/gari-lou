import { auth } from "@clerk/nextjs";
import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";
import { NextResponse } from "next/server";
import { IRespondBooking } from "../../../types/common";

export async function PUT(request: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.redirect(new URL("/sign-in", request.url));

  const res: IRespondBooking = await request.json();

  if (userId !== res.seller_id)
    return Response.json({ data: "Don't try to update someone else's stuff" });

  // update the request row
  const updateRequests = supabaseServiceRole
    .from("requests")
    .update({
      is_responded: true,
    })
    .eq("id", res?.request_id)
    .eq("seller_id", res?.seller_id)
    .select();

  // const updateRequestsOther = supabaseServiceRole
  //   .from("requests")
  //   .update({
  //     is_responded: true,
  //   })
  //   .eq("post_id", res?.request_id)
  //   .neq("id", res?.request_id)
  //   .select();

  const updatePostings = supabaseServiceRole
    .from("postings")
    .update({
      is_booked: true,
    })
    .eq("id", res?.post_id);

  const updateBookings = supabaseServiceRole
    .from("bookings")
    .update({
      status: res?.action,
    })
    .eq("post_id", res?.post_id)
    .eq("buyer_id", res?.buyer_id);

  const reply = Promise.all([
    updateRequests,
    // updateRequestsOther,
    updatePostings,
    updateBookings,
  ])
    .then(([requestsData, postingsData, bookingsData]) => {
      return Response.json({
        error: false,
        status: 200,
        message: "Booking has succesfully been updated!",
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return Response.json({
    error: false,
    status: 200,
    message: "Booking has succesfully been updated!",
  });
}
