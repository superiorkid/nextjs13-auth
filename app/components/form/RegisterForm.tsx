"use client";

import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const schema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .required();

type TRegister = z.infer<typeof schema>;

function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({ resolver: zodResolver(schema) });

  const handleFormSubmit = async (data: TRegister) => {
    await axios
      .post("http://localhost:3000/api/register", data)
      .then((callback) => {
        toast.success("Registration successfully. Now you can Login");
        router.push("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
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
              placeholder="Enter name"
              className="px-3 py-2 border-2 rounded-md"
              {...register("name")}
            />
            <p className="text-sm text-red-500">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter email"
              className="px-3 py-2  border-2 rounded-md"
              {...register("email")}
            />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Enter password"
              className="px-3 py-2  border-2 rounded-md"
              {...register("password")}
            />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>
        </div>
        <div>
          <button className="py-3 text-center rounded-lg w-full bg-blue-500 text-slate-100">
            Register
          </button>
        </div>
      </form>
      <hr />
      <div className="pt-6 flex flex-col space-y-3">
        <button
          className="text-slate-700 border border-slate-200 py-2 rounded-md"
          onClick={() => signIn("google")}
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

export default RegisterForm;
