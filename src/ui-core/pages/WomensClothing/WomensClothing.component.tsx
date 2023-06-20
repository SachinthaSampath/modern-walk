import { Header } from "../../components";
import { ItemCard } from "../../components";
import { SectionLayout } from "../../layouts";

import { Item } from "../../../types/Item";
import { useWoensProducts } from "../../../services/product.service";

export default function WomensClothing(): React.JSX.Element {
  const { data } = useWoensProducts();
  const items = data;

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


