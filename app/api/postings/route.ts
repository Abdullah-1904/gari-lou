import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";

export async function GET() {
  const { data, error } = await supabaseServiceRole.from("postings").select();
  if (error) {
    return Response.json({
      error: true,
      status: 500,
      message: "Error in fetching cities",
    });
  }
  return Response.json({ data });
}
