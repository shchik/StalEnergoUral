import { Metall } from "@/types/metall";
import { News } from "@/types/news";
import { Offer } from "@/types/offer";
import React from "react";
import HomePageButton from "../../UI/customButton";

import NewsItem from "./news-item";
import s from "./news.module.scss";

interface NewsContainerProps {
	array: News[] | string[] | Metall[] | Offer[];
}

const NewsContainer: React.FC<NewsContainerProps> = ({ array }) => {
	if (!Array.isArray(array)) return null;

	return (
		<div className={s.news}>
			<ul className={s.news__list}>
				{array.map(el => {
					const newsItem = el as News;
					return <NewsItem newsItem={newsItem} />;
				})}
			</ul>
			<div className={s["news__button-container"]}>
				<HomePageButton text="ВСЕ НОВОСТИ" bgColor="#387C43" />
			</div>
		</div>
	);
};

export default NewsContainer;
