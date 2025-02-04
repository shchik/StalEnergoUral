import { Metall } from "@/types/metall";
import { News } from "@/types/news";
import { Offer } from "@/types/offer";
import React from "react";

import OffersItem from "./offers-item/offers-item";
import s from "./offers.module.scss";

interface OffersContainerProps {
	array: Offer[] | string[] | Metall[] | News[];
}

const OffersContainer: React.FC<OffersContainerProps> = ({ array }) => {
	if (!Array.isArray(array)) return null;

	return (
		<ul className={s.offers}>
			{array.map(el => {
				const offer = el as Offer;
				return <OffersItem offer={offer} />;
			})}
		</ul>
	);
};

export default OffersContainer;
