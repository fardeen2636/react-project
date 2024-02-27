// [ MIDDLEWARE.JS FILE ]

import { NextResponse } from "next/server";

export default function middleware(req) {
  const AUTH_NOT_ALLOWED_PATHS = ["/login", "/signup", "/about", "/category", "/quote", "/chat"];
  const NO_AUTH_PATHS = ["/", "/home"];

  let loggedin = !!req.cookies.get("fardeenproject2");
  const { pathname } = req.nextUrl;


  if (loggedin && AUTH_NOT_ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    !loggedin &&
    !NO_AUTH_PATHS.includes(pathname) &&
    !AUTH_NOT_ALLOWED_PATHS.includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};