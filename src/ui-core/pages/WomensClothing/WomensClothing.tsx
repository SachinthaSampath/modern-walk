import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

export default function WomensClothing() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  const [items, setItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/women's clothing",
    })
      .then((res) => {
        setItems(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Women's Clothing"}>
        {items?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </SectionLayout>
    </>
  );
}
