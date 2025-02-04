"use client";

import WheelContainer from "@/components/general/wheel/wheel";
import KeyBenefits from "@/components/home/benefits/benefits";
import DetailsContainer from "@/components/home/details/details";
import ServicesContainer from "@/components/home/home-services/home-services";
import IntroContainer from "../components/home/intro/intro";

import clients from "@/data/clients.json";
import details from "@/data/details.json";
import metalls from "@/data/metalls.json";
import news from "@/data/news.json";
import offers from "@/data/offers.json";
import recommendations from "@/data/recommendations.json";
import services from "@/data/services.json";

import dynamic from "next/dynamic";

const MetallsContainer = dynamic(
	() => import("../components/home/metalls/metalls"),
	{ ssr: false }
);
const OffersContainer = dynamic(
	() => import("../components/home/offers/offers"),
	{ ssr: false }
);
const ClientsContainer = dynamic(
	() => import("../components/home/clients/clients"),
	{ ssr: false }
);
const NewsContainer = dynamic(() => import("../components/home/news/news"), {
	ssr: false,
});

export default function Home() {
	if (!metalls || !offers || !news || !clients) {
		return <div>Загрузка...</div>;
	}

	return (
		<main className=" w-full">
			<IntroContainer></IntroContainer>
			<DetailsContainer details={details}></DetailsContainer>
			<WheelContainer
				array={metalls}
				title="ПОПУЛЯРНЫЕ РАЗДЕЛЫ"
				isWatchAllVisible={false}
				ArrayComponent={MetallsContainer}
			></WheelContainer>
			<WheelContainer
				array={offers}
				title="СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ"
				isWatchAllVisible={true}
				ArrayComponent={OffersContainer}
			></WheelContainer>
			<ServicesContainer services={services}></ServicesContainer>
			<WheelContainer
				array={clients}
				title="НАШИ КЛИЕНТЫ"
				isWatchAllVisible={false}
				ArrayComponent={ClientsContainer}
			></WheelContainer>
			<KeyBenefits recommendations={recommendations}></KeyBenefits>
			<WheelContainer
				array={news}
				title="НОВОСТИ"
				isWatchAllVisible={false}
				ArrayComponent={NewsContainer}
			></WheelContainer>
		</main>
	);
}
