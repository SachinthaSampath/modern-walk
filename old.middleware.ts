import { NextResponse } from "next/server";

const allowerdOrigin =
  process.env.NODE_ENV === "production"
    ? ["https://www.example.com"]
    : ["http://localhost:3000", "https://google.com","https://www.google.com"];

//applies to every request in the application

export function middleware(request: Request) {

  const origin = request.headers.get("origin");
  if (origin && !allowerdOrigin.includes(origin)||!origin) { //add ||!origin to block tools
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const regex = new RegExp("/api/*");

  //apply ony to specific path
  //   if (request.url.includes("/api")) {
  //   }

  if (regex.test(request.url)) {
  }

  console.log("middleware!");
  console.log(request.method);
  console.log(request.url);
  console.log(origin);

  return NextResponse.next();
}

//any path in the /api will caught in the middleware
export const config = {
  matcher: "/api/:path*",
};
