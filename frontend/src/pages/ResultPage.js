import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { PrimaryColor } from "../utils/style";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #ccc; */
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  width: 350px;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 40px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 65px;
  font-weight: 700;
  color: #a9a9a9;
  align-items: center;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${PrimaryColor};
  width: 300px;
  height: 150px;
`;
const CircleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: white;
`;
const TopBottomContainer = styled.div`
  display: flex;
  color: white;
  font-weight: 900;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  border: 1px solid #ccc;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 30px 0 15px 0;
`;
const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 15px 0 15px 0;
`;

const MaskCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 15px 0 15px 0;
`;

const CoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 14px;
  width: 250px;
  margin: 15px 0 15px 0;
`;
const SumCoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 14px;
  border-top: 1px solid #ccc;
  width: 250px;
  margin: 15px 0 30px 0;
  padding-top: 30px;
`;

const TextContainer = styled.div``;
const StateContainer = styled.div``;

const Wallet = styled.a`
  /* text-decoration: line-through; */
  margin: 20px 0 40px 0;
  font-weight: 900;
  font-size: 14px;
  color: #ccc;
`;

const RegisterButton = styled.a`
  width: 300px;
  border: none;
  color: white;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  margin: auto 0px;
  background-color: ${PrimaryColor};
  text-decoration: none;
  border: 1px solid #ccc;
`;

function ResultPage() {
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const [pointSum, setPointSum] = useState();
  const [maskCount, setMaskCount] = useState();

  let { state } = useLocation();
  console.log(state);
  useEffect(() => {
    state.date = state.date.substr(0, 10);
    setDate(state.date);
    setLocation(state.location);
    setMaskCount(state.maskCount);
    setPointSum(state.pointSum);
  }, []);

  return (
    <div>
      <Title>
        <SubTitle>?????? ??????</SubTitle>
      </Title>
      <Container>
        <TopContainer>
          <CircleContainer>
            <FontAwesomeIcon icon={faCircleCheck} size="2x" />
          </CircleContainer>
          <TopBottomContainer>?????? ??????</TopBottomContainer>
        </TopContainer>
        <BottomContainer>
          <DateContainer>
            <TextContainer>?????? ??????</TextContainer>{" "}
            <StateContainer>{date}</StateContainer>
          </DateContainer>
          <LocationContainer>
            <TextContainer>?????? ??????</TextContainer>{" "}
            <StateContainer>{location}</StateContainer>
          </LocationContainer>
          <MaskCountContainer>
            <TextContainer>????????? ??????</TextContainer>{" "}
            <StateContainer>{maskCount}</StateContainer>
          </MaskCountContainer>
          <CoinContainer>
            <TextContainer>?????? ??????</TextContainer>{" "}
            <StateContainer>???????????? +1 msk</StateContainer>
          </CoinContainer>
          <SumCoinContainer>
            <TextContainer>?????? ??????</TextContainer>{" "}
            <StateContainer>???????????? {pointSum} msk</StateContainer>
          </SumCoinContainer>
        </BottomContainer>
        <Wallet href="/mypage">?????? ?????? ????????????</Wallet>
        <RegisterButton href="/">??????</RegisterButton>
      </Container>
    </div>
  );
}

export default ResultPage;
