"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { FlashSale } from "@/ui-core/templates";
import { Category } from "@/ui-core/templates";
import { useQuery } from "@tanstack/react-query";
import { Item } from "types/Item";
import { ProductsAPI } from "@/services";

export default function Home() {
  //use api service to get flash sale products through react query
  const { data, isLoading, isError } = useQuery(
    ["flashsale"],
    ProductsAPI.getFlashSaleProducts
  );

  return (
    <>
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <FlashSale flashItems={data as Item[]} />
        )}
        <Category />
      </main>
    </>
  );
}
