import LoginForm from "@/app/components/form/LoginForm";
import RegisterForm from "@/app/components/form/RegisterForm";
import React from "react";

function page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="mb-10">
        <h1 className="font-bold text-lg">Registration page</h1>
      </div>
      <div className="py-5 px-3 shadow-md min-w-[420px]">
        <RegisterForm />
      </div>
    </div>
  );
}

export default page;
