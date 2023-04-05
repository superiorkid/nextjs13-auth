import Link from "next/link";
import React from "react";

type pageProps = {
  openMobileMenu: boolean;
};

function MobileNavItem({ openMobileMenu }: pageProps) {
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
        <Link href="/auth/login" className="block hover:text-orange-500">
          Login
        </Link>
        <Link href="/auth/register" className="block hover:text-orange-500">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default MobileNavItem;
