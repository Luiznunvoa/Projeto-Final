import { Combos } from "../components/Combos.jsx";
import { Movie } from "../components/Movie.jsx";
import { Link } from "react-router-dom";
import { useState } from "react"
import { Banner } from "../components/Banner.jsx";
import styles from './sessions.module.css';

import '../global.css';

import pipocaImage from '../assets/Pipoca.svg';
import promoImage from '../assets/Promo.svg';
import capa1Image from '../assets/Capa1.svg';
import capa2Image from '../assets/Capa2.svg';
import capa3Image from '../assets/Capa3.svg';
import capa4Image from '../assets/Capa4.svg';
import capa5Image from '../assets/Capa5.svg';

export function Sessions() {

    //Componente banner: 
    //imagem={capa1Image}, nome='BESOURO AZUL' genero='Ação/Aventura' 
    //Dentro de banner precisa ter dropdown
    //Componente sessões 
    //Lista de objetos onde cada objeto tem um tipo e sessoes 

    return (
        <>
            <main>
                <div className={styles.info}>
                    <Banner
                        imagem={capa1Image}
                        nome='BESOURO AZUL'
                        genero='Ação/Aventura'
                        desc='Quando um escaravelho alienígena se funde com seu corpo, Jaime ganha uma armadura tecnológica que lhe concede superpoderes incríveis.'
                    ></Banner>
                </div>
                <div className={styles.horarios}>
                    <div className={styles.tipoDeSessao}>
                        <div className={styles.buttons}>
                            <button>2D</button>
                            <button>3D</button>
                            <button>IMAX</button>
                        </div>
                    </div>
                    <h1>Sessao</h1>
                    <h1>Sessao</h1>
                    <h1>Sessao</h1>
                </div>
            </main>
        </>
    );
}