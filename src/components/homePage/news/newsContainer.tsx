import React from "react";
import { News } from "@/types/News";
import HomePageButton from "../../UI/customButton";
import { Metall } from "@/types/Metall";
import { Offer } from "@/types/Offer";

import "./newsContainer.scss";

interface NewsContainerProps {
  array: News[] | string[] | Metall[] | Offer[];
}

const NewsContainer: React.FC<NewsContainerProps> = ({ array }) => {
  if (!Array.isArray(array)) return null;

  return (
    <div>
      <ul className="news">
        {array.map((el, index) => {
          const newsItem = el as News;
          return (
            <li key={index}>
              <p className="text-normal font-medium underline decoration-solid">
                {newsItem.newsTitle}
              </p>
              <p className="text-normal font-medium">{newsItem.date}</p>
              <p className="text-sm">{newsItem.info}</p>
            </li>
          );
        })}
      </ul>
      <div className="all-news-button-container flex items-center justify-center align-center">
        <HomePageButton text="ВСЕ НОВОСТИ" bgColor="#387C43" />
      </div>
    </div>
  );
};

export default NewsContainer;
