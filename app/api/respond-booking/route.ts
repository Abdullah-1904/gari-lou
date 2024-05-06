// import { auth } from "@clerk/nextjs";
// import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";
// import { NextResponse } from "next/server";
// import { IRespondBooking } from "../../../types/common";

// export async function POST(request: Request) {
//   const { userId } = auth();

//   if (!userId) return NextResponse.redirect(new URL("/sign-in", request.url));
//   const res: IRespondBooking = await request.json();
//   // update the request row
//   const { data, error } = await supabaseServiceRole
//     .from("requests")
//     .update([{}]);

//   // update the booking
//   const { data: bookingData, error: bookingError } = await supabaseServiceRole
//     .from("bookings")
//     .update([
//       {
//         status: res.status,
//       },
//     ]);

//   return Response.json(data);
// }
