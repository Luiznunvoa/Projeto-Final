import { Dropdown } from "../components/Dropdown.jsx";
import { Card } from "../components/Card.jsx";
import { Link } from "react-router-dom";
import styles from './movies.module.css';
import '../global.css';

import capa1Image from '../assets/Capa1.png';

export function Movies() {
    return (
        <>
         <main className={styles.movies}>
            <section className={styles.search}>
               <div className={styles.searchbar}>
                  <input type="text" placeholder="Pesquisar filmes" />                  
                  <div />
               </div>
            <section className={styles.dropdowns}>
               <Dropdown tipo='Gênero' />
               <Dropdown tipo='Classificação' />
            </section>

            </section>
            <section className={styles.mid}>
               <h1 className={styles.title}>Filmes</h1>
               <section className={styles.list}>
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               <Card imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        diretor='Angel Manuel Soto'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                  />
               </section>

            </section>
            
            
         </main>
        </>
    );
}