import Button from "./Button";
import Check from "../assets/Check.png";

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[]; 
    isPremium?: boolean; 
}
export default function PricingCard({ 
    title, 
    description, 
    price, 
    features, 
    isPremium = false 
}: PricingCardProps) {
    return (
        <div className={`pricing-card ${isPremium ? "premium" : ""}`}>
            {isPremium && (
                <span className="bonus">
                    <p>1º MÊS COM DESCONTO</p>
                </span>
            )}
            <span className="plan">
                <h3>{title}</h3>
                <p>{description}</p>
            </span>
            <div className="price-container">
                <h2>{price}</h2>
                {isPremium && <span className="per-month">/mês</span>}
            </div>
            <Button text="Pedir agora" secondary={!isPremium} />
            <span className="hr" />
            <div className="features-container">
                {features.map((feature, index) => (
                    <span className="features" key={index}>
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>{feature}</p>
                    </span>
                ))}
            </div>
        </div>
    );
}