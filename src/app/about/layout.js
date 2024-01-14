import Link from "next/link";
import React from "react";
import "./style.css";
/**
 * this page will be present on every routes starting with /about
 * layout name is very important as this is by default used by nextjs
 */
const Layout = ({ children }) => {
  return (
    <div>
      <ul className="login-Menu">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">Login Home</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">Student</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
