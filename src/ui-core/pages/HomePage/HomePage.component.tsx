import { Header } from "../../components";
import { FlashSale } from "../../templates";
import { Category } from "../../templates";
import { useQuery } from "@tanstack/react-query";
import { ProductsAPI } from "../../../services";
import { Item } from "types/Item";

export default function HomePage(): React.JSX.Element {
  
  //use api service to get flash sale products through react query
  const { data } = useQuery(["flashsale"], ProductsAPI.getFlashSaleProducts);

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={data as Item[]} />
      <Category />
    </div>
  );
}
