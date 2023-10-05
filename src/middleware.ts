import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session");
  console.log("session:", session);

  // If the path is /login and a session exists, redirect to home
  if (request.nextUrl.pathname === "/login" && session) {
    return NextResponse.redirect("/");
  }

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (session) {
    const baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://example.com";

    const responseAPI = await fetch(`${baseURL}/api/login`, {
      headers: {
        Cookie: `session=${session?.value}`,
      },
    });

    //Return to /login if token is not authorized
    if (responseAPI.status !== 200) {
      await fetch(`${baseURL}/api/signOut`, {
        method: "POST",
      });
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/mypage/:path*", "/mypage", "/cart/:path*", "/cart"],
};
