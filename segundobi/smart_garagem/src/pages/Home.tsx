import { useState, useEffect, useRef } from "react";
import "../styles/headers.css";
import "../styles/utilitys.css";
import "../styles/Home.css";
import "../styles/footer.css"
import "../styles/hero.css";
import "../styles/solution.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import emailjs from '@emailjs/browser';
import logo from "../assets/logo2.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import facil from "../assets/facil.png"
import economizar from "../assets/economizar.png"
import seguro from "../assets/protecao-de-dados.png"
import testemunhaum from "../assets/testemunhaum.png"
import testemunhadois from "../assets/testemunhadois.png"
import testemunhatres from "../assets/testemunhatres.png"
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"
import twitter from "../assets/twitter.png"
import RectangleUm from "../assets/imagens/RectangleUm.png"
import RectangleDois from "../assets/imagens/RectangleDois.png"
import StarRating from "../components/StarRating"
import Button from "../components/Button";
import Check from "../assets/Check.png"
import Card from "../components/Card"
import TestimonialCard from "../components/TestimonialCard"
import PricingCard from "../components/PricingCard"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true);

        emailjs.sendForm(
            'service_4512vzs',
            'template_z8jfala',
            form.current,
            'FSIVaodePovNhUyrO'
        )
            .then((result) => {
                alert("Mensagem enviada com sucesso! 😎");
                form.current?.reset();
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                alert("Ocorreu um erro ao enviar a mensagem, verifique suas credenciais do EmailJS. 😢");
                setLoading(false);
            });
    };
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={logo} alt="Logo Smart Garage" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>

                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#login" className="reverse-color" >Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={RectangleDois} alt="Retangulo um tela inicial" />
                </span>
                <img src={RectangleUm} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>SUA VAGA A UM CLIQUE MAIS PERTO DE VOCÊ</h1>
                    <p>Já pensou em não ter que ficar tendo dor de cabeça para encontrar vagas? E melhor ainda, garantir aquele descontinho, então venha nos conhecer
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>Smart Garage </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                    <section className="even-columns">
                        <div className="card">
                            <Card
                                icon={facil}
                                title="FÁCIL USO"
                                description="O sistema foi desenvolvido de forma que seja intuivo e garanta seu objetivo em poucos cliques, economizando tempo e paciencia"
                            />
                        </div>
                        <div className="card">
                            <Card
                                icon={economizar}
                                title="ECONOMICO"
                                description="Melhor do que economizar tempo, é economizar dinheiro. Nossa solução garante os melhores valores e descontos para seu bolso e veiculo"
                            />
                        </div>
                        <div className="card">

                            <Card
                                icon={seguro}
                                title="SEGURANÇA"
                                description="Você não tera com o que se preocuopar, todos os veiculos registrados em nosso sistema estarão protegidos pelas melhores seguradoras"
                            />
                        </div>

                    </section>
                </header>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Escute quem já usou</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já utilizou sabe da qualidade do nosso serviço, comprometimendo e integridade.
                        Estamos modificando o sistema de estacionamento que te faz rodar até encontrar o mais barato ou mais perto.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso: não ficar estressado procurando uma vaga.</p>
                            </span>
                            <StarRating rating={4} />
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={testemunhaum} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Com certeza meus filmes fazem muitos rirem, mas nada me faz rir mais do que ter um local fácil e pronto pra eu estacionar.</p>
                            </span>
                            <StarRating rating={5} />
                            <span className="names">
                                <p>Adam Sand</p>
                                <p>Ator e Roteirista</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={testemunhadois} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Quando cheguei ao Brasil, não fazia ideia de onde estacionar. Esse sistema foi minha salvação e o que levou o Brasil ao Hexa.</p>
                            </span>
                            <StarRating rating={5} />
                            <span className="names">
                                <p>Carlos Ancel</p>
                                <p>Técnico</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso: não ficar estressado procurando uma vaga.</p>
                            </span>
                            <StarRating rating={4} />
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={testemunhaum} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Com certeza meus filmes fazem muitos rirem...</p>
                            </span>
                            <StarRating rating={5} />
                            <span className="names">
                                <p>Adam Sand</p>
                                <p>Ator e Roteirista</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={testemunhadois} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>Quando cheguei ao Brasil, não fazia ideia de onde estacionar...</p>
                            </span>
                            <StarRating rating={5} />
                            <span className="names">
                                <p>Carlos Ancel</p>
                                <p>Técnico</p>
                            </span>
                        </div>

                    </div>
                </section>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <PricingCard
                        title="Básico"
                        description="Você tem direito a escontrar buscar vaga e reservar elas"
                        price="Grátis"
                        features={[
                            "Mapeamento de vagas",
                            "Reservas"
                        ]}
                    />
                    <PricingCard
                        title="Premium"
                        description="Para quem não quer ter dor de cabeça e ainda economizar"
                        price="R$ 25,00"
                        isPremium={true}
                        features={[
                            "Mapeamento de vagas",
                            "Descontos",
                            "Reservas",
                            "Seguro"
                        ]}
                    />
                    <PricingCard
                        title="Intermediario"
                        description="Você tem direito a descontos e reservas"
                        price="R$ 15,00"
                        features={[
                            "Mapeamento de vagas",
                            "Descontos",
                            "Reservas"
                        ]}
                    />
                </section>
            </section>
            <section id="contact">
                <div className="container content">
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h1>Entre em contato</h1>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida...
                    </p>

                    <form
                        className="form contact-form"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input
                            type="email"
                            placeholder="Seu email"
                            name="user_email"
                            required
                        />
                        <textarea
                            placeholder="Sua mensagem"
                            rows={5}
                            name="message"
                            required
                        ></textarea>

                        <div className="flex gap-1">
                            <Button text={loading ? "Enviando..." : "Enviar"} />
                        </div>
                    </form>
                </div>
            </section>
            <footer id="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <img src={logo} alt="Logo Smart Garage" width={220} height={80} />
                            <div className="social-links">
                                <a href="#" aria-label="Link para o Instagram">
                                    <img src={instagram} alt="Ícone Instagram" />
                                </a>
                                <a href="#" aria-label="Link para o Facebook">
                                    <img src={whatsapp} alt="Ícone Whatsapp" />
                                </a>
                                <a href="#" aria-label="Link para o Youtube">
                                    <img src={twitter} alt="Ícone twitter" />
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">IOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os direitos reservados.</p>
                </div>
            </footer>


        </>
    )

}


