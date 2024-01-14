"use client";
import React from "react";
/**
 * used in catch-all Segments where you don't want a page not found component to render
 */
const Lecture = ({ params }) => {
  return (
    <div>
      <h1>Day of College: {params.lecture[0]}</h1>
      <h1>Lecture No: {params.lecture[1]}</h1>
    </div>
  );
};

export default Lecture;
