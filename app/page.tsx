import React from "react";
import ExampleClientComponent from "../components/test/ExampleClientComponent";
import ExampleServerComponent from "../components/test/ExampleServerComponent";
import StateChangeTestParent from "../components/test/StateChangeTestParent";
import StateChangeTestChild from "../components/test/StateChangeTestChild";
const Home = () => {
  console.log("page is rendering ----------");
  return (
    <div>
      <div className="my-5">
        <StateChangeTestParent>
          <StateChangeTestChild />
        </StateChangeTestParent>
      </div>
      <div className="my-5">
        <ExampleClientComponent>
          <ExampleServerComponent />
        </ExampleClientComponent>
      </div>
    </div>
  );
};

export default Home;
