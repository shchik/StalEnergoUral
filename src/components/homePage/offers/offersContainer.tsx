import React from "react";
import { Offer } from "@/types/Offer";
import { Metall } from "@/types/Metall";
import { News } from "@/types/News";

import "./offersContainer.scss";

interface OffersContainerProps {
  array: Offer[] | string[] | Metall[] | News[];
}

const OffersContainer: React.FC<OffersContainerProps> = ({ array }) => {
  if (!Array.isArray(array)) return null;

  return (
    <ul className="offers">
      {array.map((el, index) => {
        const offer = el as Offer;
        return (
          <li key={index}>
            <div className="flex flex-col text-start p-12">
              <div className="info-container flex flex-col items-start justify-start  w-1/2">
                <p>{offer.title}</p>
                <p>{offer.cost} руб/тн.</p>
              </div>
              <a className="details-link">Подробнее</a>
            </div>
            <img src={offer.image} className="offer-image" alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default OffersContainer;
