import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  width: 350px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 40px;
`;

const Title = styled.div`
  display: flex;
  height: 50px;
  font-size: xx-large;
  font-weight: 700;
`;

const Sub = styled.div`
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 250px;
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 250px;
  border: none;
  color: #000;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  margin: auto 0px;
  background-color: white;
  border: 1px solid #ccc;
`;

function LoginPage() {
  return (
    <div>
      <Container>
        <Title>로그인</Title>
        <Sub>또는 회원가입</Sub>
        <Form>
          <p />
          <InputContainer>
            아이디
            <p />
            <Input />
          </InputContainer>
          <InputContainer>
            비밀번호
            <p />
            <Input />
          </InputContainer>
          <p />
          <LoginButton>로그인</LoginButton>
        </Form>
      </Container>
    </div>
  );
}

export default LoginPage;