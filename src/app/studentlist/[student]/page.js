"use client";
import React from "react";
/**
 * whenever you want to get something from another component like in this we are getting params the you have to make this component a client component
 * helpful when working with dynamic routings
 *
 * @returns
 */
const Student = ({ params }) => {
  console.log(params, "h1h1hh1h1");
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {params.student}</h3>
    </div>
  );
};

export default Student;
