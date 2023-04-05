import React from "react";
import Link from "next/link";

function NavItem() {
  return (
    <div className="space-x-7 hidden md:flex md:flex-row md:space-x-5 font-reg">
      <Link
        href="/"
        className="hover:bg-neutral-100 text-slate-800 px-3 py-2 rounded-lg"
      >
        Home
      </Link>
      <Link
        href="/user"
        className="hover:bg-neutral-100 text-slate-800 px-3 py-2 rounded-lg"
      >
        User Page
      </Link>
      <Link
        href="/admin"
        className="hover:bg-neutral-100 text-slate-800 px-3 py-2 rounded-lg"
      >
        Admin Page
      </Link>
    </div>
  );
}

export default NavItem;
