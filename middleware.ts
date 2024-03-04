import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { isAuthenticated } from "./app/_lib/isAuthenticated";

export async function middleware(request: NextRequest) {
  const bearerToken = request.cookies.get("bearerToken");

  if (!bearerToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = await isAuthenticated(bearerToken);
  if (!response) {
    return NextResponse.redirect(new URL("/auth/refresh", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/game/:path*"],
};
