"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3),
  })
  .required();

type TLogin = z.infer<typeof schema>;

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: TLogin) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <>
      <form
        className="flex flex-col space-y-8 mb-8"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter email"
              className="px-3 py-2 border-2 rounded-md"
              {...register("email")}
            />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Enter password"
              className="px-3 py-2 border-2 rounded-md"
              {...register("password")}
            />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>
        </div>
        <div>
          <button className="py-3 text-center rounded-lg w-full bg-green-500 text-slate-100">
            Login
          </button>
        </div>
      </form>
      <hr />
      <div className="pt-6 flex flex-col space-y-3">
        <button
          className="text-slate-700 border border-slate-200 py-2 rounded-md"
          onClick={() => signIn("google", { redirect: false })}
        >
          Continue with Google
        </button>
        <button
          className="bg-black text-white py-2 rounded-md"
          onClick={() => signIn("github")}
        >
          Continue with Github
        </button>
      </div>
    </>
  );
}

export default LoginForm;
