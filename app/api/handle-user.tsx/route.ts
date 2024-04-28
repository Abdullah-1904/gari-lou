import type { WebhookEvent } from "@clerk/nextjs/server";
import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";

const handler = async (req) => {
  const evt = req.body.evt as WebhookEvent;
  switch (evt.type) {
    case "user.created":
      // UserJSON.first_name is a string
      const firstName = evt.data.first_name;
      // UserJSON.last_name is a string
      const lastName = evt.data.last_name;
      // UserJSON.email_addresses is an array of EmailAddressJSON
      const emails = evt.data.email_addresses;

      const user_id = evt?.data?.id;

      const { data, error } = await supabaseServiceRole.from("user").insert([
        {
          user_id: user_id,
          email: emails[0].email_address,
        },
      ]);
      break;

    case "user.updated":
      const updatedUser_id = evt?.data?.id;
      const updatedEmails = evt.data.email_addresses;

      const { data: updatedData, error: updateError } =
        await supabaseServiceRole
          .from("user")
          .update({
            email: updatedEmails[0].email_address,
          })
          .match({
            user_id: updatedUser_id,
          });
      break;

    case "user.deleted":
      const deletedUser_id = evt?.data?.id;

      const { data: deletedData, error: deleteError } =
        await supabaseServiceRole.from("user").delete().match({
          user_id: deletedUser_id,
        });
      break;
  }

  return 
};
