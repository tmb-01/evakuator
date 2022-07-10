import styled from "styled-components";
import { Container } from "../styles/styles";

export const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 9px;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Close = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
  svg {
    width: 100%;
    height: 100%;
  }
  svg,
  path {
    fill: white;
    stroke: white;
  }
  @media only screen and (max-width: 750px) {
    display: block;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 770px;
  padding: 0;
  @media only screen and (max-width: 1250px) {
    width: 660px;
  }

  @media only screen and (max-width: 999px) {
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    flex-direction: column;
    background-color: black;
    justify-content: center;
    display: ${({ active }) => (active ? "flex" : "none")};
    li {
      margin: 20px 0;
    }
  }
`;

export const NavItem = styled.li`
  a {
    color: white;
    font-weight: 600;
    /* text-align: center; */
    text-decoration: none;
  }
`;

export const ContactBox = styled.a`
  border-radius: 100px;
  padding: 10px 20px;
  background: linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%);
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 18px;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  @media only screen and (max-width: 999px) {
    margin: 10px 0 0 auto;
  }
  @media only screen and (max-width: 750px) {
    margin: 0;
  }
`;

export const MobileNavIcon = styled.div`
  display: none;
  svg {
    margin: auto;
  }
  @media only screen and (max-width: 750px) {
    display: flex;
  }
`;
