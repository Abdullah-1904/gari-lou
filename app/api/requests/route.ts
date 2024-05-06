import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";
import { QueryData } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.redirect(new URL("/sign-in", request.url));

  const requestsQuery = supabaseServiceRole
    .from("requests")
    .select(
      `
      *,
      posting:post_id (
        id,
        seller_id,
        price,
        name,
        category,
        city_id,
      ),
      user:seller_id (
        email
      )
    `
    )
    .eq("seller_id", userId);

  type RequestsWithPosts = QueryData<typeof requestsQuery>;
  const { data, error } = await requestsQuery;

  if (error) {
    return Response.json({
      error: true,
      status: 500,
      message: "Error in fetching bookings.",
    });
  }
  return Response.json({ data });
}
