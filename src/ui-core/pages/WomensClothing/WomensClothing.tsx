import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item"; 
import { useNavigate } from "react-router-dom"; 
import { useWoensProducts } from "../../../services/product.service";
import { useUser } from "../../../contexts/UserContext";

export default function WomensClothing() {
  //validate user
  const user = useUser();
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  const { data} = useWoensProducts();
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
