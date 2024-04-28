import type { WebhookEvent } from "@clerk/nextjs/server";
import { supabaseServiceRole } from "../../../lib/supabase/supabaseClient";

const handler = async (req, res) => {
  const evt = req.body.evt as WebhookEvent;
  let responseMessage = "Success";
  console.log("user", evt.data);
  try {
    switch (evt.type) {
      case "user.created":
        const firstName = evt.data.first_name;
        const lastName = evt.data.last_name;
        const emails = evt.data.email_addresses;
        const user_id = evt?.data?.id;

        const { data, error } = await supabaseServiceRole.from("user").insert([
          {
            user_id: user_id,
            email: emails[0].email_address,
          },
        ]);
        if (error) throw error;
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
        if (updateError) throw updateError;
        break;

      case "user.deleted":
        const deletedUser_id = evt?.data?.id;

        const { data: deletedData, error: deleteError } =
          await supabaseServiceRole.from("user").delete().match({
            user_id: deletedUser_id,
          });
        if (deleteError) throw deleteError;
        break;
    }
  } catch (err) {
    responseMessage = `Failed: ${err.message}`;
    console.error(responseMessage);
  }

  res.status(200).send(responseMessage);
};
