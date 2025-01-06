import HomePageButton from "../../UI/customButton";
import "./introContainer.scss";

const IntroContainer: React.FC = () => {
  return (
    <div className="main-container relative">
      <div className="overlay-image-container absolute"></div>
      <div className="write-to-us">
        <div className="write-to-us-container font-bold text-4xl w-[450px]">
          <p>Надёжный поставщик</p>
          <p>Выгодный партнёр</p>
        </div>
        <p className="text-normal leading-6">
          Оптовая продажа металлопроката от производителя
        </p>
        <div>
          <HomePageButton
            text="НАПИСАТЬ НАМ"
            bgColor="#387C43"
          ></HomePageButton>
        </div>
      </div>

      <div className="marketing-container">
        <div className="one-marketing">
          <p className="font-black text-2xl">27000 +</p>
          <div className="yellow-line"></div>
          <p className="text-base">товарных позиций</p>
        </div>
        <div className="one-marketing">
          <p className="font-black text-2xl">15 лет</p>
          <div className="yellow-line"></div>
          <p className="text-base">работы в отрасли</p>
        </div>
        <div className="one-marketing">
          <p className="font-black text-2xl">2200 +</p>
          <div className="yellow-line"></div>
          <p className="text-base">постоянных клиентов</p>
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;
