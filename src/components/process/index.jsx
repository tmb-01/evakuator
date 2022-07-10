import React from "react";
import { Container, Description, Section, Title } from "../styles/styles";

import { ReactComponent as Van } from "../../assets/icons/van.svg";
import { ReactComponent as Rocket } from "../../assets/icons/rocket.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { ReactComponent as Support24 } from "../../assets/icons/support24.svg";
import { CardBox, CardsWrapper } from "./styles";

function ProcessSection() {
  const list = [
    {
      icon: <Van />,
      text: (
        <>
          Завжди є вільні <br /> евакуатори
        </>
      ),
    },
    {
      icon: <Rocket />,
      text: (
        <>
          Найшвидщий <br /> час подачі
        </>
      ),
    },
    {
      icon: <Wallet />,
      text: (
        <>
          Зручні способи <br /> оплати
        </>
      ),
    },
    {
      icon: <Support24 />,
      text: (
        <>
          ЗЦілодобова <br /> робота
        </>
      ),
    },
  ];
  return (
    <Section golden>
      <Container>
        <Title>Експрес – Евакуатор 24/7</Title>
        <Description>
          Виклик по Дніпру та області. <br />
          Ми перевеземо ваш транспорт у будь-яку можливу точку України.
        </Description>
        <CardsWrapper>
          {list.map(({ icon, text }) => (
            <CardBox>
              <div className="icon-box">{icon}</div>
              <p>{text}</p>
            </CardBox>
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
}

export default ProcessSection;
