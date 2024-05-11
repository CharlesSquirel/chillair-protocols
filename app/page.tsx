import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  user ? redirect("/dashboard") : redirect("sign-in");
}
