import WheelContainer from "../wheel";

type TitleContainerProps = {
  title: string;
  isWatchAllVisible: boolean;
  isLeftArrowDisabled: boolean;
  goToPrevious: () => void;
  isRightArrowDisabled: boolean;
  goToNext: () => void;
};

const TitleContainer: React.FC<TitleContainerProps> = ({
  title,
  isWatchAllVisible,
  isLeftArrowDisabled,
  goToPrevious,
  isRightArrowDisabled,
  goToNext,
}) => {
  return (
    <div className="title-container">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex justify-between items-center w-104">
        {isWatchAllVisible ? <p className="mr-32">Смотреть всё</p> : ""}
        <div className="arrow-container flex justify-between w-36">
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${
              isLeftArrowDisabled ? "cursor-not-allowed" : ""
            }`}
            onClick={goToPrevious}
            style={{ opacity: isLeftArrowDisabled ? 0.5 : 1 }}
          >
            <path
              d="M15 10H5M5 10L10 5M5 10L10 15"
              stroke="#000000"
              strokeWidth="2"
            />
          </svg>

          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${
              isRightArrowDisabled ? "cursor-not-allowed" : ""
            }`}
            onClick={goToNext}
            style={{ opacity: isRightArrowDisabled ? 0.5 : 1 }}
          >
            <path
              d="M5 10H15M15 10L10 5M15 10L10 15"
              stroke="#000000"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
