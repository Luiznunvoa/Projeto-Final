import { Combos } from "../components/Combos.jsx";
import { Movie } from "../components/Movie.jsx";
import { Link } from "react-router-dom";
import styles from './home.module.css';
import '../global.css';

import pipocaImage from '../assets/Pipoca.svg';
import promoImage from '../assets/Promo.svg';
import capa1Image from '../assets/Capa1.svg';
import capa2Image from '../assets/Capa2.svg';
import capa3Image from '../assets/Capa3.svg';
import capa4Image from '../assets/Capa4.svg';
import capa5Image from '../assets/Capa5.svg';

const comboData = [
    {
        nome: "Pipoca (P)",
        preco: "11,99",
        imagem: pipocaImage,
        desc: "Nada diz 'cinema' como o aroma inconfundível de pipoca estourando. E quando se trata de uma porção de pipoca pequena, a magia se torna ainda mais irresistível. Imagine uma explosão de sabores em miniatura, onde cada grão é um pedacinho de felicidade.",
    },
    {
        nome: "Pipoca (G)",
        preco: "13,99",
        imagem: pipocaImage,
        desc: "No reino da experiência cinematográfica, uma rainha reina supremamente: a pipoca grande, uma verdadeira protagonista em cada tela de prata. Ela transcende o mero lanche e se transforma em uma jornada culinária que rivaliza com as tramas mais emocionantes.",
    },
    {
        nome: "Duo Pipoca (M) + Refri",
        preco: "16,99",
        imagem: promoImage,
        desc: "O 'Duo Pipoca + Refri' é mais do que um lanche; é uma tradição que traz à tona as melhores lembranças de ir ao cinema. Compartilhado entre amigos, dividido com a família ou desfrutado em momentos de autocuidado, este combo é um símbolo da felicidade encontrada nos momentos mais simples.",
    }
];

const movieData = [
    { imagem: capa1Image, nome: "Besouro Azul" },
    { imagem: capa2Image, nome: "Barbie" },
    { imagem: capa3Image, nome: "Missão Impossível" },
    { imagem: capa4Image, nome: "Oppenheimer" },
    { imagem: capa5Image, nome: "Elementos" }
];

export function Home() {
    return (
        <main className={styles.home}>
            <div className={styles.intro}>
                <section>
                    <h1>Transformando Filmes em Experiências Personalizadas</h1>
                    <h2>Reserve Seu Assento e Viva a Magia do Cinema!</h2>
                </section>
            </div>
            <section className={styles.mid}>
                <Combos combos={comboData} />
                <h1>Em Cartaz</h1>
                <section className={styles.movies}>
                    {movieData.map((movie, index) => (
                        <Movie key={index} imagem={movie.imagem} nome={movie.nome} />
                    ))}
                    </section>
                    <Link to='/Movies'>Ver Mais</Link>
            </section>
        </main>
    );
}