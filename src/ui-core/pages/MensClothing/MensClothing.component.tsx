import { Header } from "../../components";
import { ItemCard } from "../../components";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout.component";
import { ProductsAPI } from "../../../services";

import { Item } from "../../../types/Item";
import { useQuery } from "@tanstack/react-query";

export default function MensClothing(): React.JSX.Element {
  //use react query to query data
  const { data, isLoading, isError } = useQuery(
    ["mens"],
    ProductsAPI.getMensProducts
  );

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Men's Clothing"}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((i: Item) => {
            return <ItemCard key={i.id} itemData={i} />;
          })
        )}
      </SectionLayout>
    </>
  );
}
