import { Recommendation } from "@/types/recommendation";
import s from "./recommendation-card.module.scss";

type RecommendationCardProps = {
	recommendation: Recommendation;
};

const RecommendationCard: React.FC<RecommendationCardProps> = ({
	recommendation,
}) => {
	return (
		<li className={s.recommendation}>
			<img src={recommendation.image} alt="" className="ml-8" />
			<p>{recommendation.info}</p>
		</li>
	);
};

export default RecommendationCard;
