import { NextRequest, NextResponse } from "next/server";
import { getHostnameDataOrDefault, getSubdomainPaths } from "./lib/site-db";

// export const config = {
//   matcher: ["/", "/about", "/_sites/:path"],
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  console.log("---middleware---");
  console.log(hostname);

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "subdomain-3.localhost:3000", "localhost:3000" is the root URL)
  // process.env.NODE_ENV === "production" indicates that the app is deployed to a production environment
  // process.env.VERCEL === "1" indicates that the app is deployed on Vercel
  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.multi-tenant-next-sage.vercel.app`, "")
      : hostname.replace(`.modernwalk.com:3000`, "");

  console.log(currentHost);

  const subDomains = await getSubdomainPaths();
  const pathNameStart = url.pathname.split("/")[0];

  // Prevent security issues – users should not be able to canonically access
  if (subDomains.includes(pathNameStart)) {
    url.pathname = `/404`;
  } else {
    url.pathname = `/${currentHost}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}












// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {

//   console.log("------middleware------");
//   const origin = request.headers.get("origin");
//   const hostname = request.headers.get("host");
//   console.log(hostname);
//   console.log(request.nextUrl.pathname);
//   console.log(request.url);
// //   console.log(request.nextUrl);

//   // # matcher
//   //return NextResponse.rewrite(new URL("/api/about  ", request.url));

//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/api/about', request.url))
//   }

//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }

// // # Matcher

// // matcher allows you to filter Middleware to run on specific paths.
// // export const config = {
// //   matcher: ["/about/:path*", "/dashboard/:path*"],
// // };

// export const config = {
//     matcher: [
//       /*
//        * Match all request paths except for the ones starting with:
//        * - api (API routes)
//        * - _next/static (static files)
//        * - _next/image (image optimization files)
//        * - favicon.ico (favicon file)
//        */
//       //'/((?!api|_next/static|_next/image|favicon.ico).*)',
//       '/((?!_next/static|_next/image|favicon.ico).*)',
//     ],
//   }
