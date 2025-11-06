import logo from "../assets/logo.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/Home.css";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import RectangleUm from "../assets/imagens/RectangleUm.png"
import RectangleDois from "../assets/imagens/RectangleDois.png"
import Champion from "../assets/Champion.png"
import testemunhaum from "../assets/testemunhaum.png"
import testemunhadois from "../assets/testemunhadois.png"
import testemunhatres from "../assets/testemunhatres.png"
import estrela_cheia from "../assets/estrela_cheia.png"
import estrela_vazia from "../assets/estrela_vazia.png"
import "../styles/hero.css";
import "../styles/solution.css"
import "../styles/testimonials.css"
import Check from "../assets/Check.png"
import "../styles/pricing.css"
import "../styles/contact.css"
//caminho corrigido
export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                    <img src={logo} alt="Logo DonaFrost" width={220} height={80} />
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
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
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
                        Inovação é com a gente! A <strong>DonaFrost </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                    <section className="even-columns">
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Produto Vencedor
                                </h3>
                                <p>
                                    Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e estrela_cheiatup Garage.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Produto Vencedor
                                </h3>
                                <p>
                                    Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e estrela_cheiatup Garage.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Produto Vencedor
                                </h3>
                                <p>
                                    Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e estrela_cheiatup Garage.
                                </p>
                                <hr />
                            </div>
                        </div>
                    </section>
                </header>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={testemunhadois} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={testemunhadois} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={testemunhatres} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
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
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
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
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                        </ul>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                      
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
        
                        </ul>
                    </div>
                </section>
            </section>
            <section id="contact">
                <div className="container content">
                    <p className="desktop-only">
                        Envie sua dúvida 
                    </p>
                    <h1>ENTRE EM CONTATO</h1>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento,
                    uma dúvida técnica de algum de nossos produtos.Estamos à disposição para responder.😎
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Enviar" /></span>
                    </div>
                </div>
            </section>
        </>
    )

}