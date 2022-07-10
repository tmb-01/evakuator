import { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useState } from "react";
import { MainButton, Title } from "../styles/styles";
import { InputBox, PopUpForm, PopUpWrapper } from "./styles";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const keys = {
  YOUR_SERVICE_ID: "service_bnyo7xo",
  YOUR_TEMPLATE_ID: "template_od8j0si",
  YOUR_PUBLIC_KEY: "QGH7KaC_k1UPqOvW2",
};

function PopUp({ setPopUp }) {
  console.log(process.env);
  // console.log(env);
  const [loading, setLoading] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        keys.YOUR_SERVICE_ID,
        keys.YOUR_TEMPLATE_ID,
        e.target,
        keys.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Eлектронний лист успішно надіслано");
          setPopUp(false);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Щось пішло не так :(");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <PopUpWrapper onClick={() => setPopUp(false)} />
      <PopUpForm onSubmit={submitForm}>
        <Title>Замовити</Title>
        <InputBox>
          <input name="name" type="text" required />
          <p className="label">Ім'я</p>
        </InputBox>
        <InputBox>
          <input name="phoneNumber" type="tel" required />
          <p className="label">Телефон</p>
        </InputBox>
        <InputBox>
          <input name="problem" type="text" />
          <p className="label">Проблема</p>
        </InputBox>
        <MainButton center disabled={loading}>
          {loading ? "Завантаження..." : "Замовити"}
        </MainButton>
      </PopUpForm>
    </div>
  );
}

export default PopUp;
