import { Service } from "@/types/service";
import HomeServiceItem from "./home-service-item";
import s from "./home-services.module.scss";

interface HomeServicesProps {
	services: Service[];
}

const HomeServices: React.FC<HomeServicesProps> = ({ services }) => {
	return (
		<div className={s.service}>
			<div className={s.service__container}>
				<div className={s.service__info}>
					<h1 className="text-2xl font-bold mb-16">УСЛУГИ</h1>
					<ul className={s.service__grid}>
						{services.map(service => {
							return <HomeServiceItem service={service} />;
						})}
					</ul>
				</div>
				<div className="w-1/2 flex justify-center">
					<img
						src="/service-images/fourth-container.jpg"
						alt=""
						className={s.service__image}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeServices;
