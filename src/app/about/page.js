"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">About Page</h1>
      <button onClick={() => router.push("/")}>Click me to go to Home</button>
    </div>
  );
};

export default About;
