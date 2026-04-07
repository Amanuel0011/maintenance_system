import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = ["/dashboard", "/bookings", "/payments", "/messages", "/settings"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const requiresAuth = protectedPrefixes.some((prefix) => path.startsWith(prefix));
  if (!requiresAuth) return NextResponse.next();

  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/bookings/:path*", "/payments/:path*", "/messages/:path*", "/settings/:path*"],
};
