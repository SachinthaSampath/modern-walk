import { Button, Header } from "../../components";
import { FlashSale } from "../../templates";
import { Category } from "../../templates";
import { useQuery } from "@tanstack/react-query";
import { Item } from "types/Item";
import { ProductsAPI } from "../../../services";

export default function HomePage(): React.JSX.Element {
  //use api service to get flash sale products through react query
  const { data, isLoading, isError } = useQuery(
    ["flashsale"],
    ProductsAPI.getFlashSaleProducts
  );

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <FlashSale flashItems={data as Item[]} />
      )}
      <Category />
      <Button type="primary">Click me</Button> 
    </div>
  );
}
