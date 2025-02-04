import { Service } from "@/types/service";

type HomeServiceItemProps = {
	service: Service;
};

const HomeServiceItem: React.FC<HomeServiceItemProps> = ({ service }) => {
	return (
		<li>
			<div className="bg-orange p-4 rounded">
				<img src={service.image} alt="" />
			</div>
			<p>{service.name}</p>
		</li>
	);
};

export default HomeServiceItem;
