import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  margin-top: 30px;
  div.box {
    width: 50%;
    text-align: center;
    p.title {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;

      /* Main gradient */

      background: linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    a {
      font-weight: 700;
      font-size: 55px;
      line-height: 67px;
      color: white;
      text-decoration: none;
    }
  }
`;
