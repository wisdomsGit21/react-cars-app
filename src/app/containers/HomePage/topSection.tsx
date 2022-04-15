import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/buttons";
import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -19em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -19em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 60em;
    max-height: 30em;
    right: -13em;
    top: -25em;
    transform: rotate(-22deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 14em;
    top: -9em;
    right: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    top: -8em;
    right: -8em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 25em;
    top: -9em;
    right: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    mt-4
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars</Slogan>
        <Description>
          Choose the car that suits you best from our extensive catalog, order
          it and have it delivered straight to your{" "}
          <strong>
            <em>Drive Way</em>
          </strong>
          .
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
