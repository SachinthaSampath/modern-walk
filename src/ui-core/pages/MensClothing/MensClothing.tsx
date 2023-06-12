import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function MensClothing() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  //state to hold items
  const [items, setItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //run on first render (componentsDidMount)
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/men's clothing",
      data: {},
    })
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Men's Clothing"}>
        {items?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </SectionLayout>
    </>
  );
}
