import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

export const supabaseServiceRole = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_SECRET
);
