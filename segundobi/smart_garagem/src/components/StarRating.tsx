import estrela_cheia from "../assets/estrela_cheia.png";
import estrela_vazia from "../assets/estrela_vazia.png";

export default function StarRating({ rating = 5 }) {
    return (
        <span className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? estrela_cheia : estrela_vazia}
                    alt={index < rating ? "Estrela cheia" : "Estrela vazia"}
                    width={22}
                    height={20}
                />
            ))}
        </span>
    );
}