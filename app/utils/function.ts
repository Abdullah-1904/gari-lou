import { createClient } from "../../lib/supabase/browserClient";

const supabase = createClient();
export const insertPosting = async (values, userId: string) => {
  return supabase.from("postings").insert([
    {
      name: values.name,
      category: values.category,
      city_id: parseInt(values.city_id),
      description: values.description,
      is_booked: false,
      is_available: true,
      price: parseInt(values.price),
      seller_id: userId,
    },
  ]);

  //   if (error) throw new Error(error.message);
  //   return data;
};

export const deletePosting = async (post_id: number) => {
  const { data, error } = await supabase
    .from("postings")
    .delete()
    .eq("id", post_id);
  //   if (error) throw new Error(error.message);
  return data;
};
