import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
  margin: auto;
`;

export const MainButton = styled.button`
  background: linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%);
  border-radius: 70px;
  padding: 10px;
  width: 270px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  border: 0;
  margin-top: 45px;
  display: block;
  cursor: pointer;
  ${({ center }) => center && "margin:50px auto 0"}
`;

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
  background: ${({ golden }) =>
    golden ? "linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%)" : "black"};
  color: ${({ golden }) => (golden ? "black" : "white")};
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  text-align: center;
  /* margin-bottom: 10px; */
`;

export const Description = styled.p`
  width: 95%;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  /* margin-top: 10px; */
  margin: 10px auto 0;
`;
