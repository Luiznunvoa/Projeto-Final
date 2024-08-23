import { useContext, useState, useEffect } from "react"
import { Banner } from "../components/Banner.jsx";
import { Session } from "../components/Session.jsx";
import styles from './sessions.module.css';

import '../global.css';

import capa1Image from '../assets/Capa1.svg';
import { ApplicationContext } from "../contexts/ApplicationContextProvider.jsx";
//import capa2Image from '../assets/Capa2.svg';
//import capa3Image from '../assets/Capa3.svg';
//import capa4Image from '../assets/Capa4.svg';
//import capa5Image from '../assets/Capa5.svg';

export function Sessions() {
    const {title, setTitle} = useContext(ApplicationContext)
    const [sessions, setSessions] = useState([])
    const [movie, setMovie] = useState({
        title: "American psycho",
        imageURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIvvYaUfBN6TUJg6jaXvW4t6-iZHu2tdovGAo3a9xpvBMMKLj8vDnHUDqsJwCmYiuIzKa6NbEltRZrCdXV6-egseG9QOG-bkppjaeOa5s",
        synopse: "In New York City in 1987, a handsome, young urban professional, Patrick Bateman (Christian Bale), lives a second life as a gruesome serial killer by night. The cast is filled by the detective (Willem Dafoe), the fiance (Reese Witherspoon), the mistress (Samantha Mathis), the coworker (Jared Leto), and the secretary (Chloë Sevigny). This is a biting, wry comedy examining the elements that make a man a monster.",
        genre: "Horror",
        ageRating: 18})
    const [sessoes, setSessoes] = useState([
        {
            rating: '2D', 
            list: ['15:20', '17:40', '20:00'],
            listSessionId: ["1", "2", "3"]
        }, 
        {
            rating: '3D', 
            list: ['15:30', '20:15'],
            listSessionId: ["4", "5"]
        },
        {
            rating: 'IMAX', 
            list: ['16:20', '18:00'],
            listSessionId: ["6", "7"]
        }
    ])

    useEffect(() => {
        fetch('http://localhost:3000/sessions/movie/' + title)
            .then(response => response.json())
            .then(data => {
                setSessions(data);
            })
            .catch(error => {
                console.error('Erro ao buscar sessões:', error);
            });
    }, [movie]);

    useEffect(() => {
        var lista = [{
            rating : "2D",
            list: [],
            listSessionId: []
        }, {
            rating : "3D",
            list: [],
            listSessionId: []
        }, {
            rating : "IMAX",
            list: [],
            listSessionId: []
        }
        ]
        sessions.forEach((session)=>{

            if (session.type == 0){
                lista[0].list.push(session.time)
                lista[0].listSessionId.push(session.SessionId)
            } else if (session.type == 1) {
                lista[1].list.push(session.time)
                lista[1].listSessionId.push(session.SessionId)
            } else if (session.type == 2) {
                lista[2].list.push(session.time)
                lista[2].listSessionId.push(session.SessionId)
            }
        })
        console.log(lista)
        setSessoes(lista)
        console.log(lista)
    }, [sessions])


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
                        imagem={movie.imageURL}
                        nome={movie.title}
                        genero={movie.genre}
                        desc= {movie.synopse}
                        rating = {movie.ageRating}
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
                        if(sessao.list.length>0){
                        return (
                            <Session
                                key={sessao.rating}
                                rating={sessao.rating}
                                sessions={sessao.list}
                                sessionsId={sessao.listSessionId}
                            ></Session>
                        )
                    }
                    })}
                </div>
            </main>
        </>
    );
}