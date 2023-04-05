import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import { Role } from "@prisma/client";

async function page() {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== Role.ADMIN) {
    return (
      <div>
        <p className="error-warning">
          You are not authorized to view this page!. <br /> only admin can
          access this page
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="success-warning">You are an admin, welcome!</p>
    </div>
  );
}

export default page;
