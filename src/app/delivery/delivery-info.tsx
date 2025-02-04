import s from "./delivery-info.module.scss";

const DeliveryInfo: React.FC = () => {
	return (
		<div className="flex w-9/10 justify-center">
			<div className={s.delivery}>
				<div className="flex justify-between items-center mb-16">
					<h1 className="font-bold text-2xl">ДОСТАВКА</h1>
					<p className="text-sm">
						Главная <span className="text-gray4">| Доставка</span>
					</p>
				</div>
				<div className={s.delivery__info}>
					<p className="w-3/5">
						Купить товар «Лист горячекатаный 8 1.5м 6м ст3пс5/сп5
						14637» в Екатеринбурге по выгодной цене за метр, тонну
						или другую единицу измерения. Онлайн-калькулятор
						рассчитает стоимость, размеры и массу изделия (кг, т).
						<br></br>
						<br></br>
						Ознакомьтесь с описанием и техническими характеристиками
						товара «Лист горячекатаный 8 1.5м 6м ст3пс5/сп5 14637»
						на официальном сайте «Сталепромышленной компании» или
						звоните по номеру в Екатеринбурге +7 (343) 3122111 и
						получите консультацию наших специалистов.
					</p>
					<div className="flex justify-end">
						<img
							src="/deliveryPage-images/car.jpg"
							alt=""
							className="w-4/5"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryInfo;
