import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-4xl mx-auto">{children}</div>;
}

export default Container;
