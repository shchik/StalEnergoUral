import { Metall } from "@/types/metall";
import { News } from "@/types/news";
import { Offer } from "@/types/offer";
import React from "react";

import s from "./metalls.module.scss";

interface MetallsProps {
	array: Metall[] | string[] | Offer[] | News[];
}

const Metalls: React.FC<MetallsProps> = ({ array }) => {
	if (!Array.isArray(array)) return null;

	return (
		<div className={s.metalls}>
			<ul className={s.metalls__container}>
				{array.map((el, index) => {
					if ("name" in el.toString) {
						const metall = el as Metall;
						return (
							<li key={index}>
								<img
									src={metall.image}
									alt={metall.name}
									className={s.metalls__image}
								/>
								<p className={s.metalls__name}>{metall.name}</p>
							</li>
						);
					}

					return null;
				})}
			</ul>
		</div>
	);
};

export default Metalls;
