import { useState } from "react"
import { Banner } from "../components/Banner.jsx";
import { Session } from "../components/Session.jsx";
import styles from './sessions.module.css';

import '../global.css';

import capa1Image from '../assets/Capa1.svg';
//import capa2Image from '../assets/Capa2.svg';
//import capa3Image from '../assets/Capa3.svg';
//import capa4Image from '../assets/Capa4.svg';
//import capa5Image from '../assets/Capa5.svg';

export function Sessions() {

    const sessoes = [
        {
            rating: '2D', 
            list: ['15:20', '17:40', '20:00']
        }, 
        {
            rating: '3D', 
            list: ['15:30', '20:15']
        },
        {
            rating: 'IMAX', 
            list: ['16:20', '18:00']
        }
    ]

    /*  
        Questões: 
        1) Como passar propriedades para a pagina sessao? 
        2) Constante sessoes: 
            Tem que estar associada a cada filme 
            Sessao -> Horario
                Cidade da sessao
                Bairro da sessao
                Tipo da sessao
    */

    return (
        <>
            <main className={styles.fundo}>
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
                    {sessoes.map(sessao => {
                        return (
                            <Session
                                key={sessao.rating}
                                rating={sessao.rating}
                                sessions={sessao.list}
                            ></Session>
                        )
                    })}
                </div>
            </main>
        </>
    );
}