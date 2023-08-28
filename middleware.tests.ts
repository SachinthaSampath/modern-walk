

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  // console.log("------middleware------");
  const origin = request.headers.get("origin");
  const hostname = request.headers.get("host");
  // console.log(hostname);
  // console.log(request.nextUrl.pathname);
  // console.log(request.url);
//   console.log(request.nextUrl);

  // # matcher
  //return NextResponse.rewrite(new URL("/api/about  ", request.url));

  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/api/about', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}

// # Matcher

// matcher allows you to filter Middleware to run on specific paths.
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      //'/((?!api|_next/static|_next/image|favicon.ico).*)',
      '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
  }
