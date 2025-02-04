import { Metall } from "@/types/metall";
import { News } from "@/types/news";
import { Offer } from "@/types/offer";
import React from "react";

import s from "./clients.module.scss";

interface ClientsProps {
	array: string[] | Metall[] | Offer[] | News[];
}

const Clients: React.FC<ClientsProps> = ({ array }) => {
	if (!Array.isArray(array)) return null;

	return (
		<ul className={s.clients}>
			{array.map((el, index) => {
				if (typeof el === "string") {
					return (
						<li key={index}>
							<img
								src={el}
								className={s.client__image}
								alt={`Client ${index}`}
							/>
						</li>
					);
				}

				return null;
			})}
		</ul>
	);
};

export default Clients;
