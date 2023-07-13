import React from "react";
import { H2 } from "../../atoms";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category } = itemData;

  return (
    <>
      <div>
        <Card className="flex min-w-[250px] max-w-[250px] flex-col items-center justify-start overflow-hidden rounded-[20px] bg-white">
          <CardHeader className="h-32 overflow-hidden ">
            <CardTitle className=" text-md mt-2 text-center font-medium">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="my-1 flex h-28 items-center">
            <img
              src={image}
              alt="Flash sale item"
              className="max-h-[100px] w-[100px]"
            />
          </CardContent>
          <CardFooter
            className={`flex h-[250px] w-full flex-col content-start items-center overflow-hidden rounded-xl p-2 py-2 ${
              category === "men's clothing" ? "bg-mens" : "bg-womens"
            }`}
          >
            <H2 className="font-bold text-[#0E42FD]">Rs {price}</H2>
            <CardDescription className="h-full w-full overflow-hidden py-2">
              <p className="text-center text-sm text-black ">{description}</p>
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
