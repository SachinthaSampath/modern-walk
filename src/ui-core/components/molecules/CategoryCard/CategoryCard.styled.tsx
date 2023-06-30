import styled from "styled-components";

const StyledCategoryCard = styled.div<{ type?: string }>`
  border-radius: 15px;
  padding: 40px;
  margin: 20px;
  width: 30%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, type }) =>
    type === "mens" ? theme.background.mens : theme.background.womens};

  a {
    text-decoration: none;
    color: white;
  }
`;

export default StyledCategoryCard;
