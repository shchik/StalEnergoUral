import { Offer } from "@/types/offer";
import s from "./offers-item.module.scss";

type OffersItemProps = {
	offer: Offer;
};

const OffersItem: React.FC<OffersItemProps> = ({ offer }) => {
	return (
		<li className={s.offer}>
			<div className={s.offer__container}>
				<div className={s.offer__info}>
					<p>{offer.title}</p>
					<p>{offer.cost} руб/тн.</p>
				</div>
				<a className={s["offer__details-link"]}>Подробнее</a>
			</div>
			<img src={offer.image} className={s.offer__image} alt="" />
		</li>
	);
};

export default OffersItem;
