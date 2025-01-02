import React from "react";
import { Metall } from "@/types/Metall";
import { Offer } from "@/types/Offer";
import { News } from "@/types/News";

import "./metallsContainer.scss";

interface MetallsContainerProps {
  array: Metall[] | string[] | Offer[] | News[];
}

const MetallsContainer: React.FC<MetallsContainerProps> = ({ array }) => {
  if (!Array.isArray(array)) return null;

  return (
    <div className="metalls">
      <ul className="metalls-container">
        {array.map((el, index) => {
          if ("name" in el.toString) {
            const metall = el as Metall;
            return (
              <li key={index}>
                <img
                  src={metall.image}
                  alt={metall.name}
                  className="metalls-image"
                />
                <p className="metalls-name">{metall.name}</p>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
};

export default MetallsContainer;
