import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ac from "../libs/accesscontrol";

async function page() {
  const currentUser = await getCurrentUser();
  const writeNewPost = !currentUser
    ? undefined
    : ac.can(currentUser?.role).createOwn("post");

  return (
    <div className="p-10 font-light text-md">
      {!currentUser ? (
        <p className="error-warning">
          You are not authorized to view this page.
        </p>
      ) : (
        <>
          <p className="success-warning mb-5">
            Hello {currentUser.name}, welcome!
          </p>
          {writeNewPost?.granted && (
            <p className="space-x-2">
              <span className="text-xs font-lights">
                bcz youre admin. you can write new post
              </span>
              <button className="px-3 py-1 bg-blue-400 text-blue-900">
                Whire new Article
              </button>
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default page;
