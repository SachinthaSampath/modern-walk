import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useMensProducts } from "../../../services/product.service";

export default function MensClothing() {
  //validate user
  const user = useUser();
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  //use api service to get mens products thrugh react query
  const { data } = useMensProducts();
  const items = data;

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
