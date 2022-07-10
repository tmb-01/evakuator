import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: flex-start;
  flex-wrap: wrap;
  @media only screen and (max-width: 999px) {
    margin-bottom: 100px;
  }
`;

export const CardBox = styled.div`
  width: 270px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  img {
    width: 100%;
    object-fit: cover;
  }
  p.name {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    padding: 14px 0;
    background-color: white;
  }
  p.price {
    background: linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%);
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    padding: 5px;
  }
  @media only screen and (max-width: 1250px) {
    width: 219px;
  }
  @media only screen and (max-width: 999px) {
    width: 337px;
    margin-bottom: 15px;
    img {
      height: 177px;
    }
  }
  @media only screen and (max-width: 750px) {
    width: 48%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const PaymentMethods = styled.div`
  width: 100%;
  border-radius: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #ffe3b1;
  margin-top: 10px;
  div.line {
    width: 1px;
    height: 60px;
    background-color: #ffe3b1;
  }
  p {
    text-align: center;
    width: calc(50% - 0.5px);
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    div.line {
      width: calc(100% - 50px);
      height: 1px;
      margin: auto;
    }
    p{
        width: 100%;
        padding: 16px;
    }
    padding: 0;
    border-radius: 20px;
  }
`;
