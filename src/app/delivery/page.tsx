"use client";

import DeliveryInfo from "@/components/deliveryPage/deliveryInfo";
import WheelContainer from "@/components/general/wheel/wheel";
import clients from "@/data/clients.json";

import dynamic from "next/dynamic";
const ClientsContainer = dynamic(
  () => import("../../components/homePage/clients/clientsContainer"),
  { ssr: false }
);

export default function Delivery() {
  return (
    <main>
      <DeliveryInfo></DeliveryInfo>
      <WheelContainer
        array={clients}
        title="С КЕМ МЫ РАБОТАЕМ"
        isWatchAllVisible={false}
        ArrayComponent={ClientsContainer}
      ></WheelContainer>
    </main>
  );
}
