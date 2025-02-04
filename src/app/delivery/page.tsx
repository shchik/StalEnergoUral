"use client";

import DeliveryInfo from "@/app/delivery/delivery-info";
import WheelContainer from "@/components/general/wheel/wheel";
import clients from "@/data/clients.json";

import dynamic from "next/dynamic";
const ClientsContainer = dynamic(
	() => import("../../components/home/clients/clients"),
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
