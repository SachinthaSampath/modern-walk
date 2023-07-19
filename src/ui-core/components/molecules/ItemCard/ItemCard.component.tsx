import React from "react";
import { Button, H2 } from "../../../../ui-core";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";
import { useToast } from "../../../../ui-core";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { useUserContext } from "../../../../contexts";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category, id } = itemData;
  const { user } = useUserContext();
  const { toast } = useToast();

  function addItemToCart(item: Item) {
    let id = item.id;
    //get the cart from local storage
    let cartRow = localStorage.getItem("cart");
    let cart: { id: number; qty: number; data: Item }[] = [];
    if (cartRow) {
      cart = JSON.parse(cartRow);
    } else {
      cart = [];
    }
    //check if the item exits
    let found = false;
    let newCart = cart.map((item) => {
      if (item.id == id) {
        found = true;
        return { id, qty: item.qty + 1, data: item.data };
      } else {
        return item;
      }
    });
    if (!found) {
      newCart.push({ id, qty: 1, data: item });
    }
    toast({
      title: "Item added!",
      description: item.title,
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

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
            {user.isLoggedIn ? (
              <p className="py-1">
                <Button size={"sm"} onClick={() => addItemToCart(itemData)}>
                  Add to Cart
                </Button>
              </p>
            ) : (
              <></>
            )}
            <CardDescription className="h-full w-full overflow-hidden py-2">
              <p className="text-center text-sm text-black ">{description}</p>
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
