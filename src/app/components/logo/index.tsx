import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  font-family: Viner Hand ITC;
  ${tw`
        text-xl
        md: text-2xl
        font-bold
        text-gray-700
        m-1
        pl-1
    `}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md: h-9
  `}
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="Yourcar." />
      </Image>
      <LogoText>EasyRentals</LogoText>
    </LogoContainer>
  );
}
