"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">Hello login</h1>
      <button onClick={() => router.push("/")}>Click me to go to Home</button>
    </div>
  );
};

export default Page;
