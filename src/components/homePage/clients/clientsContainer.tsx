import { Metall } from "@/types/Metall";
import { News } from "@/types/News";
import { Offer } from "@/types/Offer";
import React from "react";

import "./clientsContainer.scss";

interface ClientsContainerProps {
  array: string[] | Metall[] | Offer[] | News[];
}

const ClientsContainer: React.FC<ClientsContainerProps> = ({ array }) => {
  if (!Array.isArray(array)) return null;

  return (
    <ul className="clients">
      {array.map((el, index) => {
        if (typeof el === "string") {
          return (
            <li key={index}>
              <img src={el} className="client-image" alt={`Client ${index}`} />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default ClientsContainer;
