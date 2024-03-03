import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { isAuthenticated } from "./app/_lib/isAuthenticated";

export async function middleware(request: NextRequest) {
  const bearer = request.cookies.get("bearerToken");

  if (!bearer) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = await isAuthenticated(bearer);
  if (!response) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/game/:path*"],
};
