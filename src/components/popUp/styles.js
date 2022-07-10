import styled from "styled-components";

export const PopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

export const PopUpForm = styled.form`
  width: 568px;
  height: fit-content;
  padding: 75px 80px;
  background: linear-gradient(315deg, #ffe3b1 0%, #ffd58a 100%);
  border-radius: 20px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  margin: auto;
  overflow: auto;
  @media only screen and (max-width: 1250px) {
    width: 453px;
    padding: 75px 25px;
  }
  @media only screen and (max-width: 750px) {
    width: 400px;
    padding: 53px 18px;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const InputBox = styled.label`
  display: block;
  margin-top: 15px;
  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
    outline: 0;
    background-color: transparent;
    font-size: 20px;
    padding: 10px;
  }
  p.label {
    text-align: center;
    margin: 10px auto;
    font-size: 24px;
    /* line-height: 29px; */

    color: #6d6d6d;
  }
  @media only screen and (max-width: 750px) {
    p.label{
        font-size: 18px;
    }
  }
`;
