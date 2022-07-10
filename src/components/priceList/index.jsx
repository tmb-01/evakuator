import React from "react";
import {
  Container,
  Description,
  MainButton,
  Section,
  Title,
} from "../styles/styles";
import { CardBox, CardsWrapper, PaymentMethods } from "./styles";

import rect1 from "../../assets/images/Rectangle1.png";
import rect2 from "../../assets/images/Rectangle2.png";
import rect3 from "../../assets/images/Rectangle3.png";
import rect4 from "../../assets/images/Rectangle4.png";

function PriceSection({setPopUp}) {
  const list = [
    {
      img: rect1,
      name: "Мототранспорт",
      price: "від 600 грн",
    },
    {
      img: rect2,
      name: "Легковий автомобіль",
      price: "від 600 грн",
    },
    {
      img: rect3,
      name: "Позашляховик",
      price: "від 600 грн",
    },
    {
      img: rect4,
      name: "Вантаж до 2-х тон",
      price: "від 600 грн",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Ціни на евакуацію</Title>
        <Description>
          (Остаточна вартість залежить від багатьох факторів. Наприклад, від
          ваги вашого авто, стану після ДТП, оберненості коліс і місця
          доставлення вашого транспорту, вартості палива)
        </Description>
        <Description>
          Дзвоніть прямо зараз і ми дамо об’єктивну оцінку вартості послуг по
          перевезенню вашого автомобіля. Дізнайтесь чесну вартість евакуації в
          будь-яке місце Дніпра, подзвонивши нам.
        </Description>
        <CardsWrapper>
          {list.map(({ img, name, price }) => (
            <CardBox>
              <img src={img} alt="" />
              <p className="name">{name}</p>
              <p className="price">{price}</p>
            </CardBox>
          ))}
        </CardsWrapper>
        <Title>Способи оплати</Title>
        <PaymentMethods>
          <p>Готівковий розрахунок</p>
          <div className="line" />
          <p>Переказ на картку</p>
        </PaymentMethods>
        <MainButton center onClick={()=>setPopUp(true)}>Замовити</MainButton>
      </Container>
    </Section>
  );
}

export default PriceSection;
