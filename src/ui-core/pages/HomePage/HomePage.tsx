import React, { useContext } from "react";
import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category"; 
import { useNavigate } from "react-router-dom";
 
import { UserContext } from "../../../contexts/UserContext"; 
import { useFlashSaleProducst } from "../../../services/api.service.rq";

export default function HomePage() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  //use api service to get flash sale products through react query
  const {data,isLoading,error} =useFlashSaleProducst(); 

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={data} />
      <Category />
    </div>
  );
}
