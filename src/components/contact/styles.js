import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  div.box {
    width: 100%;
    text-align: center;
    margin-top: 30px;

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
  @media only screen and (max-width: 1250px) {
    div.box {
      width: 100%;
    }
  }
  @media only screen and (max-width: 750px) {
    div.box {
      a {
        font-size: 38px;
        line-height: 46px;
      }
    }
  }
`;
