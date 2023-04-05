import LoginForm from "@/app/components/form/LoginForm";
import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";

async function page() {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    return redirect("/");
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="mb-10">
        <h1 className="font-bold text-lg">Login page</h1>
      </div>
      <div className="py-5 px-3 shadow-md min-w-[420px]">
        <LoginForm />
      </div>
    </div>
  );
}

export default page;
