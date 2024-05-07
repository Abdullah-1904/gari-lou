import { auth } from "@clerk/nextjs";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId) return NextResponse.redirect(new URL("/sign-in", request.url));
  const res = (await request.json()) as { email: string };
  
  console.log("SENDING EMAIL TO", res?.email);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [res?.email],
      subject: "Request Approved",
      react: EmailTemplate({}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
