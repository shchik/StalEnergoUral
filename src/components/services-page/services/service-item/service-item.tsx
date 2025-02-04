import { Service } from "@/types/service";
import s from "./service-item.module.scss";

type ServiceItemProps = {
	service: Service;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
	return (
		<div className={s["service-item"]}>
			<div className={s["service-item__image"]}>
				<img src={service.image} alt="" />
			</div>
			<p className={s["service-item__text"]}>{service.name}</p>
		</div>
	);
};

export default ServiceItem;
