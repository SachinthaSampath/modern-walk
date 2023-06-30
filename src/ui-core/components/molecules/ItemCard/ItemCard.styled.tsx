import styled from "styled-components";

const StyledItemCard = styled.div`
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  min-width: 200px;
  height: 450px;
  margin: 15px;

  .item-card-details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px;
    padding: 10px;
    height: 180px;
    overflow: hidden;
  }
  .card-mens {
    background: #2bd9af;
  }
  .card-womens {
    background: #ff5e84;
  }

  .item-card-desc {
    text-align: center;
    font-size: 12px;
    overflow: hidden;
  }

  .item-card-price {
    margin: 0px;
    color: #0e42fd;
  }

  .item-card-title {
    font-size: 16px;
    text-align: center;
    padding: 5px 10px;
  }
  .item-card-img {
    width: 100px;
    max-height: 100px;
    margin-bottom: 20px;
  }
`;

export default StyledItemCard;
