import { Header } from "../../components";
import { ItemCard } from "../../components";
import { SectionLayout } from "../../layouts";

import { Item } from "../../../types/Item";
import { ProductsAPI } from "../../../services";
import { useQuery } from "@tanstack/react-query";

export default function WomensClothing(): React.JSX.Element {
  const { data } = useQuery(["womens"], ProductsAPI.getWomensProducts);

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Women's Clothing"}>
        {data?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </SectionLayout>
    </>
  );
}
