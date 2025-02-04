import services from "../../../data/services.json";
import ServiceItem from "./service-item/service-item";
import s from "./services.module.scss";

const Services = () => {
	return (
		<div className={s.services}>
			<div className={s.services__wrapper}>
				<div className={s.services__header}>
					<h1 className="font-bold text-2xl">УСЛУГИ</h1>
					<p className="text-sm">
						Главная <span className="text-gray4">| Доставка</span>
					</p>
				</div>
				<div className={s.services__grid}>
					{services.map(service => {
						return <ServiceItem service={service} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
