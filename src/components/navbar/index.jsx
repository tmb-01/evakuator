import React, { useState } from "react";
import {
  Close,
  ContactBox,
  MobileNavIcon,
  NavbarContainer,
  NavbarList,
  NavbarWrapper,
  NavItem,
} from "./styles";

import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as MenuBar } from "../../assets/icons/bar.svg";
import { ReactComponent as X } from "../../assets/icons/x.svg";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarList active={active}>
          <Close
            onClick={() => {
              setActive(false);
            }}
          >
            <X />
          </Close>
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
        <MobileNavIcon onClick={() => setActive(true)}>
          <MenuBar />
        </MobileNavIcon>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
