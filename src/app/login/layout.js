"use client";
import Link from "next/link";
import React from "react";
import "./style.css";
import { usePathname } from "next/navigation";

/**
 * usePathname for conditional rendering of layout
 * @param children all the child routes comes here. This file will give a common layout to all child routes
 */
const Layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-Menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Home</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to Login</Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
