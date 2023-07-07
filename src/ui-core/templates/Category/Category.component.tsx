import React from "react";
import { SectionLayout } from "../../layouts";
import { CategoryCard, H2 } from "../../components";

export default function Category(): React.JSX.Element {
  return (
    <>
      <div className="my-14">
        <div className="w-100 space-y-5">
          <H2 className="px-4 ml-8 text-2xl font-semibold">Categories</H2>
          <div className="mt-14 grid grid-cols-1 gap-4 px-10  md:grid-cols-2">
            <CategoryCard
              className="rounded-[15px] bg-modern-walk-bg-mens p-[40px] text-center text-2xl font-bold text-white"
              name="Men's Clothing"
              page="mens"
            />
            <CategoryCard
              className="rounded-[15px] bg-modern-walk-bg-womens p-[40px] text-center text-2xl font-bold text-white"
              name="Women's Clothing"
              page="womens"
            />
          </div>
        </div>
      </div>
    </>
  );
}
