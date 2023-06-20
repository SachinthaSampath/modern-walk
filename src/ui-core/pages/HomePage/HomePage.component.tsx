// import { Header } from "../../components";
import { Header } from "../../components";
import { FlashSale } from "../../templates";
import { Category } from "../../templates";
import { useFlashSaleProducts } from "../../../services/product.service";

export default function HomePage(): React.JSX.Element {
  //use api service to get flash sale products through react query
  const { data } = useFlashSaleProducts();

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={data} />
      <Category />
    </div>
  );
}
