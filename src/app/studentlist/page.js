import Link from "next/link";
import React from "react";

/**
 * helpful when you want dynamic routings in your url
 */
const StudentList = () => {
  const studentList = [
    "Bellingham",
    "Vinicious",
    "Rodrygo",
    "Musiala",
    "Palmer",
    "Gusto",
    "Alvarez",
    "Haaland",
    "Foden",
  ];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {studentList?.map((value, index) => (
          <li key={index}>
            <Link href={`/studentlist/${value}`}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
