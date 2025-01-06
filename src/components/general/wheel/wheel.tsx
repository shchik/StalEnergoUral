"use client";

import { Metall } from "@/types/Metall";
import { Offer } from "@/types/Offer";
import { News } from "@/types/News";
import React from "react";
import TitleContainer from "./title/wheelTitle";
import "./wheel.scss";

interface WheelContainerProps {
  array: Metall[] | Offer[] | string[] | News[];
  title: string;
  isWatchAllVisible: boolean;
  ArrayComponent: React.ComponentType<{
    array: Metall[] | Offer[] | News[] | string[];
  }>;
}

const WheelContainer: React.FC<WheelContainerProps> = ({
  array,
  title,
  isWatchAllVisible,
  ArrayComponent,
}) => {
  const [currentMetallIndex, setcurrentMetallIndex] = React.useState(0);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = React.useState(false);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = React.useState(true);

  const goToPrevious = () => {
    if (isLeftArrowDisabled) return;

    setcurrentMetallIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setIsLeftArrowDisabled(newIndex === 0);
      if (isRightArrowDisabled === true) setIsRightArrowDisabled(false);
      return newIndex;
    });
  };

  const goToNext = () => {
    if (isRightArrowDisabled) return;

    setcurrentMetallIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const itemsPerPage = isOfferArray(array) ? 3 : 4;
      setIsRightArrowDisabled(newIndex === array.length - itemsPerPage);

      if (isLeftArrowDisabled) setIsLeftArrowDisabled(false);
      return newIndex;
    });
  };

  const getCurrentItems = () => {
    const itemsPerPage = isOfferArray(array) ? 3 : 4;
    return array.slice(currentMetallIndex, currentMetallIndex + itemsPerPage);
  };

  const isMetallArray = (
    array: Metall[] | Offer[] | string[] | News[]
  ): array is Metall[] => {
    return (array as Metall[]).every(
      (item) => (item as Metall).name !== undefined
    );
  };

  const isOfferArray = (
    array: Metall[] | Offer[] | string[] | News[]
  ): array is Offer[] => {
    return (array as Offer[]).every(
      (item) => (item as Offer).title !== undefined
    );
  };

  const isNewsArray = (
    array: Metall[] | Offer[] | string[] | News[]
  ): array is News[] => {
    return (array as News[]).every(
      (item) => (item as News).newsTitle !== undefined
    );
  };

  if (!array) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="third-block-container">
      <div className="inner-container">
        <TitleContainer
          title={title}
          isWatchAllVisible={isWatchAllVisible}
          isLeftArrowDisabled={isLeftArrowDisabled}
          isRightArrowDisabled={isRightArrowDisabled}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        ></TitleContainer>

        <ArrayComponent array={getCurrentItems()}></ArrayComponent>
      </div>
    </div>
  );
};

export default WheelContainer;
