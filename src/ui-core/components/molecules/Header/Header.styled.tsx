import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 5px solid #d9d9d9;
  display: flex;

  a {
    text-decoration: none;
  }

  .heading-titile {
    width: 80%;
    display: flex;
    justify-content: center;
  }
  .heading-user-section {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .heading-user-section p {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;

export default StyledHeader;
