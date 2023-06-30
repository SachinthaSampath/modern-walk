import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  box-sizing:border-box;    
}

body{
  margin:0;
  background:#F5F5F5;
}
.main-container{ 
  background:#F5F5F5;
}


.main-heading {
  text-align: center;
  font-family: "Roboto";
  color: #0e0e0e;
  text-decoration: none !important;
}
 

`;

export default GlobalStyles;
