import React from "react"; 
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import ItemCard from "../../components/molecules/ItemCard/ItemCard";

export default function FlashSale({flashItems}) {  
 
  return (
    <div className="flash-sale-container"> 
      <SectionLayout heading={"Flash Sale"}>
        {flashItems.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </SectionLayout>
    </div>
  );
}
