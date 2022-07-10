import styled from "styled-components";
import { Container } from "../styles/styles";

export const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 9px;
  z-index: 1;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 770px;
  padding: 0;
`;

export const NavItem = styled.li`
  a{
    color: white;
    font-weight: 600;
    /* text-align: center; */
    text-decoration: none;
  }
`;

export const ContactBox = styled.a`
  border-radius: 100px;
  padding: 10px 20px;
  background: linear-gradient(315deg, #FFE3B1 0%, #FFD58A 100%);
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 18px;
  svg{
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;
