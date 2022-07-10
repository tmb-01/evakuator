import React from "react";
import { Container, Section, Title } from "../styles/styles";
import { Box } from "./styles";

function Contact() {
  return (
    <Section>
      <Container>
        <Title>Контакти:</Title>

        <Box>
          <div className="box">
            <p className="title">Телефон</p>
            <a href="tel:+380976657747">+380 97 665 77 47</a>
          </div>
          {/* <div className="box">
            <p className="title">Почта</p>
            <a href="mailto:vitalisdpua@gmail.com">vitalisdpua@gmail.com</a>
          </div> */}
        </Box>
      </Container>
    </Section>
  );
}

export default Contact;
