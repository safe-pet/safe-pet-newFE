import styled from "styled-components";
import { NextHead } from "../src/utils/NextHead";
import BestMarkets from "../src/components/best/BestMarkets";
import { SalePet } from "../src/components/salePet/SalePet";

export default function Home() {
  return (
    <>
      <NextHead descrpition="Generated by safe-pet" />
      <BestMarkets />
      <SalePet />
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
