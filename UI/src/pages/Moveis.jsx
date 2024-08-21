import { Dropdown } from "../components/Dropdown.jsx";
import { Card } from "../components/Card.jsx";
import { Link } from "react-router-dom";
import styles from './movies.module.css';
import '../global.css';

import capa1Image from '../assets/Capa1.png';

const filmes = [
    {
        imagem: capa1Image,
        nome: 'BESOURO AZUL',
        genero: 'Ação/Aventura',
        diretor: 'Angel Manuel Soto',
        desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
    },
    {
      imagem: capa1Image,
      nome: 'BESOURO AZUL',
      genero: 'Ação/Aventura',
      diretor: 'Angel Manuel Soto',
      desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
   },
   {
      imagem: capa1Image,
      nome: 'BESOURO AZUL',
      genero: 'Ação/Aventura',
      diretor: 'Angel Manuel Soto',
      desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
   },
   {
      imagem: capa1Image,
      nome: 'BESOURO AZUL',
      genero: 'Ação/Aventura',
      diretor: 'Angel Manuel Soto',
      desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
   },
   {
      imagem: capa1Image,
      nome: 'BESOURO AZUL',
      genero: 'Ação/Aventura',
      diretor: 'Angel Manuel Soto',
      desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
   },
   {
      imagem: capa1Image,
      nome: 'BESOURO AZUL',
      genero: 'Ação/Aventura',
      diretor: 'Angel Manuel Soto',
      desc: 'Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
   },
    
];

export function Movies() {
    return (
        <main className={styles.movies}>
            <div className={styles.search}>
                <section className={styles.searchbar}>
                    <input type="text" placeholder="Pesquisar filmes" />
                    <div />
                </section>
                <section className={styles.dropdowns}>
                    <Dropdown tipo='Gênero' />
                    <Dropdown tipo='Classificação' />
                </section>
            </div>
            <section className={styles.mid}>
                <h1>Filmes</h1>
                <section className={styles.list}>
                    {filmes.map((filme, index) => (
                        <Card
                            key={index}
                            imagem={filme.imagem}
                            nome={filme.nome}
                            genero={filme.genero}
                            diretor={filme.diretor}
                            desc={filme.desc}
                        />
                    ))}
                </section>
                <section className={styles.pages}>
                    <div className={styles.arrowL}>
                        <div />
                    </div>
                    <div className={styles.arrowR}>
                        <div />
                    </div>
                </section>
            </section>
        </main>
    );
}