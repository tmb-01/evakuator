import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const CardBox = styled.div`
  width: 270px;
  height: 220px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(94, 61, 4, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div.icon-box {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    padding-bottom: 5px;
    border: 3px solid #ffe3b1;
    margin: 0 auto;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
`;
