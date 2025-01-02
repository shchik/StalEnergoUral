"use client";

import DetailsContainer from "@/components/homePage/details/detailsContainer";
import IntroContainer from "../components/homePage/intro/introContainer";
import WheelContainer from "@/components/general/wheel/wheel";
import ServicesContainer from "@/components/homePage/services/servicesContainer";
import KeyBenefits from "@/components/homePage/keyBenefits/keyBenefits";

import news from "@/data/news.json";
import recommendations from "@/data/recommendations.json";
import clients from "@/data/clients.json";
import services from "@/data/services.json";
import offers from "@/data/offers.json";
import metalls from "@/data/metalls.json";
import details from "@/data/details.json";

import dynamic from "next/dynamic";

const MetallsContainer = dynamic(
  () => import("../components/homePage/metalls/metallsContainer"),
  { ssr: false }
);
const OffersContainer = dynamic(
  () => import("../components/homePage/offers/offersContainer"),
  { ssr: false }
);
const ClientsContainer = dynamic(
  () => import("../components/homePage/clients/clientsContainer"),
  { ssr: false }
);
const NewsContainer = dynamic(
  () => import("../components/homePage/news/newsContainer"),
  { ssr: false }
);

export default function Home() {
  if (!metalls || !offers || !news || !clients) {
    return <div>Загрузка...</div>;
  }

  return (
    <main className="home-page-container w-full">
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
