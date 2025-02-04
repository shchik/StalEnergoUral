import { Detail } from "@/types/detail";
import s from "./detail-item.module.scss";

type DetailItemProps = {
	detail: Detail;
};

const DetailItem: React.FC<DetailItemProps> = ({ detail }) => {
	return (
		<div className={s.detail}>
			<p className="font-bold text-normal ">{detail.title}</p>
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
			<img src={detail.image} alt="" className={s.detail__image} />
		</div>
	);
};

export default DetailItem;
