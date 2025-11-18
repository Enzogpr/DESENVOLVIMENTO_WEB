
import estrela_cheia from "../assets/estrela_cheia.png";
import estrela_vazia from "../assets/estrela_vazia.png";

interface TestimonialCardProps {
    image: string; 
    text: string;  
    name: string;  
    role: string;  
}

export default function TestimonialCard({ image, text, name, role }: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt="Imagem perfil cliente" />
            <span className="testimony">
                <p>
                    {text}
                </p>
            </span>
            <span className="rating">
                <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}