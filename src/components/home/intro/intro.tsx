import HomePageButton from "../../UI/customButton";
import s from "./intro.module.scss";

const IntroContainer: React.FC = () => {
	return (
		<div className={s.intro}>
			<div className={s["intro__overlay-image"]}></div>
			<div className={s.intro__write}>
				<div className={s["intro__write-container"]}>
					<p>Надёжный поставщик</p>
					<p>Выгодный партнёр</p>
				</div>
				<p className="text-normal leading-6">
					Оптовая продажа металлопроката от производителя
				</p>
				<div className={s.intro__button}>
					<HomePageButton
						text="НАПИСАТЬ НАМ"
						bgColor="#387C43"
					></HomePageButton>
				</div>
			</div>

			<div className={s.intro__marketing}>
				<div className={s["intro__marketing-item"]}>
					<p className="font-black text-2xl">27000 +</p>
					<div className={s["intro__yellow-line"]}></div>
					<p className="text-base">товарных позиций</p>
				</div>
				<div className={s["intro__marketing-item"]}>
					<p className="font-black text-2xl">15 лет</p>
					<div className={s["intro__yellow-line"]}></div>
					<p className="text-base">работы в отрасле</p>
				</div>
				<div className={s["intro__marketing-item"]}>
					<p className="font-black text-2xl">2200 +</p>
					<div className={s["intro__yellow-line"]}></div>
					<p className="text-base">постоянных клиентов</p>
				</div>
			</div>
		</div>
	);
};

export default IntroContainer;
