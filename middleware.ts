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
  // console.log(hostname);

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "subdomain-3.localhost:3000", "localhost:3000" is the root URL)
  // process.env.NODE_ENV === "production" indicates that the app is deployed to a production environment
  // process.env.VERCEL === "1" indicates that the app is deployed on Vercel
  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.multi-tenant-next-sage.vercel.app`, "")
      : hostname.replace(`.modernwalk.local:3000`, "");

  // console.log(currentHost);

  const subDomains = await getSubdomainPaths();

  //******* possible bug with pathname start - should be 0 but adding '' as first element in the array
  const pathNameStart = url.pathname.split("/")[1];

// console.log(pathNameStart);

//   // Prevent security issues – users should not be able to canonically access
//   if (!subDomains.includes(pathNameStart)) {
//     url.pathname = `/404`;
//   } else {
//     url.pathname = `/${currentHost}${url.pathname}`;
//   }
console.log(url.pathname);
url.pathname="/mens"
  return NextResponse.rewrite(url);
}










