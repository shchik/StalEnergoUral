import HomePageButton from "@/components/UI/customButton";
import { Detail } from "@/types/Detail";

import "./detailsContainer.scss";

type DetailsContainerProps = {
  details: Detail[];
};

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  details,
}: DetailsContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="second-block-container">
        {details.map((detail, index) => {
          return (
            <div className="one-detail" key={index}>
              <p className="title font-bold text-normal ">{detail.title}</p>
              <ul className="font-base">
                {detail.info.map((inf, index) => {
                  return <li key={index}>{inf}</li>;
                })}
              </ul>
              <a
                className="text-gray3 underline decoration-2 decoration-solid cursor-pointer
            "
              >
                Смотреть все
              </a>
              <img src={detail.image} alt="" className="detail-image" />
            </div>
          );
        })}
      </div>
      <div className="second-block-buttons mt-16 flex">
        <div className="mx-4">
          <HomePageButton
            text="СМОТРЕТЬ ВСЕ"
            bgColor="#387C43"
          ></HomePageButton>
        </div>
        <div className="mx-4">
          <HomePageButton
            text="СКАЧАТЬ ПРАЙС-ЛИСТ"
            bgColor="#F3AA3C"
          ></HomePageButton>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
