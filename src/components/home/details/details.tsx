import HomePageButton from "@/components/UI/customButton";
import { Detail } from "@/types/detail";

import DetailItem from "./detail-item/detail-item";
import s from "./details.module.scss";

type DetailsContainerProps = {
	details: Detail[];
};

const DetailsContainer: React.FC<DetailsContainerProps> = ({
	details,
}: DetailsContainerProps) => {
	return (
		<div className={s.details}>
			<div className={s.details__container}>
				{details.map(detail => {
					return <DetailItem detail={detail} />;
				})}
			</div>
			<div className="mt-16 flex">
				<div className="mx-4">
					<HomePageButton
						text="СМОТРЕТЬ ВСЕ"
						bgColor="#387C43"
					></HomePageButton>
				</div>
				<div className="mx-4">
					<HomePageButton
						text="СКАЧАТЬ ПРАЙС-ЛИСТ"
						bgColor="#F3AA3C"
					></HomePageButton>
				</div>
			</div>
		</div>
	);
};

export default DetailsContainer;
