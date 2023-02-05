import React from "react";
import { Layout } from "../layout";
import BestMarkets from "./best/BestMarkets";
import { EventSlide } from "./event/EventSlide";
import { ParcelOutPet } from "./parcelOutPet/ParcelOutPet";

export const MainPage = () => {
  return (
    <Layout>
      <EventSlide />
      <BestMarkets />
      <ParcelOutPet />
    </Layout>
  );
};
