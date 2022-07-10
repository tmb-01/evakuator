import React from "react";
import {
  ContactBox,
  NavbarContainer,
  NavbarList,
  NavbarWrapper,
  NavItem,
} from "./styles";

import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarList>
          <NavItem>
            <a href="/">Евакуатор</a>
          </NavItem>
          <NavItem>
            <a href="/">Ціни на евакуацію</a>
          </NavItem>
          <NavItem>
            <a href="/">Додаткова інформація</a>
          </NavItem>
          <NavItem>
            <a href="/">Контакти</a>
          </NavItem>
        </NavbarList>
        <ContactBox href="tel:+380976657747">
          <PhoneIcon />
          +380 97 665 77 47
        </ContactBox>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
