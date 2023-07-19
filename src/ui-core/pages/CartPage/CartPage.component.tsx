import { useUserContext } from "../../../contexts";
import { Header } from "../../../ui-core";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui-core";
import { Item } from "../../../types/Item";

const CartPage = () => {
  const { user } = useUserContext();
  //get the cart from local storage
  let cartRow = localStorage.getItem("cart");
  let cart: { id: number; qty: number; data: Item }[] = [];
  if (cartRow) {
    cart = JSON.parse(cartRow);
  }

  return (
    <>
      <Header headingText="Modern Walk" />
      <div>
        {user.isLoggedIn ? (
          <>
            <div className="md:w-2/3 mx-auto container mt-5">
              <Table>
                <TableCaption>List of your selected items.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => {
                    console.log(item);
                    return (
                      <TableRow>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.data?.title}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell className="text-right">Rs. {item.data?.price}</TableCell>
                        <TableCell className="text-right">Rs. {(Number(item.data.price))*(item.qty)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-xl text-red-700">
              Please login to continue...
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
