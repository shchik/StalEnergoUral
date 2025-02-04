"use client";

import HomePageButton from "../../UI/customButton";
import s from "./metall-cutting.module.scss";

const MetallCutting: React.FC = () => {
	return (
		<div className={s.metall}>
			<div className={s.metall__container}>
				<div className={s.metall__info}>
					<h1 className="font-bold text-2xl">РЕЗКА МЕТАЛЛОПРОКАТА</h1>
					<div>
						<p className="font-bold text-normal">
							Преимущества сверления
						</p>
						<p className="text-normal leading-6">
							Сверление отверстий в металлопрокате (лист, уголок,
							балка) и металлоконструкциях осуществляется по
							чертежам клиента при наличии прямой плоскости
							минимальным размером 270х100 мм для крепления
							сверлильного станка. Сверлению подвергается металл
							толщиной от 4 до 50 мм, при этом диаметре отверстия
							может иметь размер от 10 до 50 мм.
						</p>
					</div>
					<div className={s.metall__disadvantages}>
						<h1 className="font-bold text-normal">
							Недостатки сверления
						</h1>
						<ul className="text-normal list-disc ml-4">
							<li>возможность неровности реза</li>
							<li>
								невозможность осуществления сложный форм реза
							</li>
						</ul>
					</div>

					<div className={s["metall__service-cost"]}>
						<h1 className="font-bold text-normal">
							Стоимость услуги зависит от:
						</h1>
						<ul className="text-normal list-disc ml-4">
							<li>Диаметра отверстия</li>
							<li>Количества металла</li>
							<li>Глубины металла</li>
						</ul>
					</div>

					<div className={s["metall__order-service"]}>
						<HomePageButton
							text="Заказать услугу"
							bgColor="darkgreen"
						></HomePageButton>
					</div>
				</div>
				<div>
					<img src="/service-images/rezka.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default MetallCutting;
