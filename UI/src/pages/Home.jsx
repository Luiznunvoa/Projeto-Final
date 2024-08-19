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

export function Home() {
    return (
        <>
            <main className={styles.home}>
              <section className={styles.top}>
                  <section>
                      <h1>Transformando Filmes em Experiências Personalizadas</h1>
                      <p>Reserve Seu Assento e Viva a Magia do Cinema!</p>
                  </section>
              </section>
              <section className={styles.mid}>
                  <div className={styles.back}>
                      <Combos 
                          nome1="Pipoca (P)" nome2="Pipoca (G)" nome3="Duo Pipoca (M) + Refri" 
                          preco1="11,99" preco2="11,99" preco3="11,99" 
                          imagem1={pipocaImage} imagem2={pipocaImage} imagem3={promoImage}
                          desc1="Nada diz 'cinema' como o aroma inconfundível de pipoca estourando..."
                          desc2="No reino da experiência cinematográfica, uma rainha reina supremamente..."
                          desc3="O 'Duo Pipoca + Refri' é mais do que um lanche; é uma tradição que traz..."
                          seta1='1' seta2='2' seta3='1'
                      />
                      <h1 className={styles.title}>Em Cartaz</h1>
                      <section className={styles.movies}>
                        <Movie imagem={capa1Image} nome="Besouro Azul"/>
                        <Movie imagem={capa2Image} nome="Barbie"/>
                        <Movie imagem={capa3Image} nome="Missão Impossível"/>
                        <Movie imagem={capa4Image} nome="Oppenheimer"/>
                        <Movie imagem={capa5Image} nome="Elementos"/>
                      </section>
                      <h1 className={styles.vermais}>Ver Mais</h1>
                  </div>
              </section>
            </main>
        </>
    );
}