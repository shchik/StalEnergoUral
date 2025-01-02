import { Recommendation } from "@/types/Recommendation";
import "./keyBenefits.scss";

interface FifthMainContainerProps {
  recommendations: Recommendation[];
}

export default function KeyBenefits({
  recommendations,
}: FifthMainContainerProps) {
  return (
    <div className="fifth-container-overlay">
      <div className="fifth-container">
        <h1 className="font-bold text-2xl">ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
        <ul className="recommendation-list">
          {recommendations.map((recommendation, index) => {
            return (
              <li className="one-card" key={index}>
                <img src={recommendation.image} alt="" className="ml-8" />
                <p>{recommendation.info}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
