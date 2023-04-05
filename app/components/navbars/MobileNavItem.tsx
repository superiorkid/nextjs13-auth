import { SafeUser } from "@/app/types";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

type pageProps = {
  openMobileMenu: boolean;
  currentUser?: SafeUser | null;
};

function MobileNavItem({ openMobileMenu, currentUser }: pageProps) {
  return (
    <div
      className={`flex flex-col md:hidden w-full bg-neutral-50 ${
        !openMobileMenu && "hidden"
      } absolute`}
    >
      <div className="px-8 py-5 flex flex-col space-y-4 font-reg text-center">
        <Link href="/" className="block hover:text-orange-500">
          Home
        </Link>
        <Link href="/user" className="block hover:text-orange-500">
          User Page
        </Link>
        <Link href="/admin" className="block hover:text-orange-500">
          Admin Page
        </Link>
        <hr />

        {!currentUser ? (
          <>
            <Link href="/auth/login" className="block hover:text-orange-500">
              Login
            </Link>
            <Link href="/auth/register" className="block hover:text-orange-500">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <button className="border-l-4 border-blue-700 pl-1 py-">
              <span>{currentUser.email}</span>
            </button>
            <button
              className="block hover:text-red-500"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileNavItem;
