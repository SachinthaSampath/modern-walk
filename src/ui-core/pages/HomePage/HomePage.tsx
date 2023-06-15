import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../../contexts/UserContext";
import { useFlashSaleProducts } from "../../../services/product.service";

export default function HomePage() {
  //validate user
  const user = useUser();
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

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
