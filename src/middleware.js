import React from "react";
import { NextResponse } from "next/server";

/**
 * file name is very important
 * middleware is a function that will run before any path if the path is not specified
 */
const middleware = (request) => {
  // if (request.nextUrl.pathname !== "/login") {   if config matcher is not there uncomment this line as our app will redirect to /login everytime and our app will broke,
  return NextResponse.redirect(new URL("/login", request.url));
  // }
};

export default middleware;

/**
 * this will apply the middleware on the paths starting from about and studentlist
 * in short for specific routes, If config matcher is not given then middleware will apply to whole app
 * /:path* means all path after /studenlist including studentlist
 * /:path+ means all path after /about excluding /about
 *
 */
export const config = {
  matcher: ["/about/:path+", "/studentlist/:path*"],
};
