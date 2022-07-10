import styled from "styled-components";

import homeBg from "../../assets/images/home-bg.png";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${homeBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  /* &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background: #1c1c1c;
    opacity: 0.9;
  } */
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background: #1c1c1c;
    opacity: 0.9;
  }
`;

export const TextData = styled.div`
  width: 590px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  color: white;
`;

export const ListIconText = styled.ul`
  list-style: none;
  color: white;
  padding: 0;
  width: 459px;
  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    span {
      width: calc(100% - 50px);
    }
  }
`;

export const CarImageBox = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0px;
  left: 45%;
  height: 612px;
  margin: auto;
  img {
    width: auto;
    height: 100%;
  }
`;
