import React from "react";
import Navbar from "../navbar";
import { Container, MainButton, MainBUtton } from "../styles/styles";
import { CarImageBox, HeaderWrapper, ListIconText, TextData, Title } from "./styles";

import { ReactComponent as MapPin } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Label } from "../../assets/icons/label.svg";
import headerCar from "../../assets/images/header-car.png"

function Header({setPopUp}) {
  const iconText = [
    {
      icon: <MapPin />,
      text: `Ми перевеземо ваш транспорт у будь-яку можливу точку Україні`,
    },
    {
      icon: <Label />,
      text: `Вартість	від 600 грн`,
    },
    {
      icon: <Clock />,
      text: `Час очікування	до 30 хв`,
    },
  ];

  return (
    <HeaderWrapper>
      <div className="cover" />
      <Navbar />
      <Container style={{ zIndex: 5 }}>
        <TextData>
          <Title>Швидка подача <br /> евакуатора по Дніпру <br /> і області</Title>
          <ListIconText>
            {iconText.map(({ icon, text }) => (
              <li>
                {icon}
                <span>{text}</span>
              </li>
            ))}
          </ListIconText>
          <MainButton onClick={()=>setPopUp(true)}>Замовити</MainButton>
        </TextData>
        <CarImageBox>
            <img src={headerCar} alt="van" />
        </CarImageBox>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
