import { Recommendation } from "@/types/recommendation";
import s from "./benefits.module.scss";
import RecommendationCard from "./recommendation/recommendation-card";

interface KeyBenefitsProps {
	recommendations: Recommendation[];
}

const KeyBenefits: React.FC<KeyBenefitsProps> = ({ recommendations }) => {
	return (
		<div className={s.benefits}>
			<div className={s.benefits__container}>
				<h1 className="font-bold text-2xl">ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
				<ul className={s.benefits__recommendations}>
					{recommendations.map(recommendation => {
						return (
							<RecommendationCard
								recommendation={recommendation}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default KeyBenefits;
