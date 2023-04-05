import React from "react";

async function page() {
  return (
    <div className="p-10 font-light text-md">
      ** this page can only access if user logged in!
    </div>
  );
}

export default page;
