"use client";

import React, { ReactNode } from "react";
// import "@/styles/globals.css";

import { Header } from "@/ui-core";

import { UserProvider, ThemeProvider } from "@/contexts/contexts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/ui-core";
import Store1Layout from "@/ui-core/layouts/PageLayouts/Store1Layout";
import Store2Layout from "@/ui-core/layouts/PageLayouts/Store2Layout";
import { usePathname, useRouter } from "next/navigation";

const queryClient = new QueryClient();

const layout: {
  [store: string]: ({ children }: { children: React.ReactNode }) => ReactNode;
} = {
  store1: Store1Layout,
  store2: Store2Layout,
};

export const metadata = {
  title: "Modern Walk - Multi Tenant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // console.log(pathname);

  //finding the tenant based on the pathname
  let matches = pathname.match(/^\/([^/]+)/);
  const tenant = matches ? matches[0] : "";

  const TenantLayout =
    (layout[tenant] as ({
      children,
    }: {
      children: React.ReactNode;
    }) => ReactNode) ?? React.Fragment;

  const HeaderLayout =
    pathname.includes("/login") || pathname.includes("/signup")
      ? React.Fragment
      : Header;

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <ThemeProvider>
              <TenantLayout>
                <HeaderLayout />
                {children}
                <Toaster />
              </TenantLayout>
            </ThemeProvider>
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
