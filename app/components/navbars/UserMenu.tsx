"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { toast } from "react-hot-toast";

type PageProps = {
  currentUser?: SafeUser | null;
};

function UserMenu({ currentUser }: PageProps) {
  const router = useRouter();

  return (
    <div className="hidden md:block md:space-x-5">
      {currentUser ? (
        <>
          <button className="border-l-4 border-blue-700 pl-1 py-1">
            <span>{currentUser.email}</span>
          </button>
          <button
            className="font-semibold px-3 py-2 bg-red-500 text-yellow-900 rounded-xl hover:bg-yellow-600"
            onClick={() => {
              signOut();
              toast.success("Log out successfully");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className="px-3 py-2 border border-purple-500 rounded-xl"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </button>
          <button
            className="font-semibold px-3 py-2 bg-yellow-500 text-yellow-900 rounded-xl hover:bg-yellow-600"
            onClick={() => router.push("/auth/register")}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}

export default UserMenu;
