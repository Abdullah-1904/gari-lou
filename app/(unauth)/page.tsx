"use client";
import { useAuth } from "@clerk/nextjs";
import Hero from "../../components/Hero";
import Offerings from "../../components/offerings";
import { redirect } from "next/navigation";

export default function Home() {
  const { sessionId } = useAuth();

  if (sessionId) {
    redirect("/dashboard");
  }

  return (
    <main className="">
      <Hero />
      <Offerings />
    </main>
  );
}
