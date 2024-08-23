import { useContext, useState, useEffect } from "react";
import { Banner } from "../components/Banner.jsx";
import { Session } from "../components/Session.jsx";
import styles from './sessions.module.css';
import '../global.css';
import capa1Image from '../assets/Capa1.svg';
import { ApplicationContext } from "../contexts/ApplicationContextProvider.jsx";

export function Sessions() {
    const { title, setTitle } = useContext(ApplicationContext);
    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({
        title: "American psycho",
        imageURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIvvYaUfBN6TUJg6jaXvW4t6-iZHu2tdovGAo3a9xpvBMMKLj8vDnHUDqsJwCmYiuIzKa6NbEltRZrCdXV6-egseG9QOG-bkppjaeOa5s",
        synopse: "In New York City in 1987, a handsome, young urban professional, Patrick Bateman (Christian Bale), lives a second life as a gruesome serial killer by night. The cast is filled by the detective (Willem Dafoe), the fiance (Reese Witherspoon), the mistress (Samantha Mathis), the coworker (Jared Leto), and the secretary (Chloë Sevigny). This is a biting, wry comedy examining the elements that make a man a monster.",
        genre: "Horror",
        ageRating: 18
    });

    const [sessoes, setSessoes] = useState([]);
    const [selectedRating, setSelectedRating] = useState(''); // Estado para o filtro
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBairro, setSelectedBairro] = useState('');

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
            rating: "2D",
            list: [],
            listSessionId: []
        }, {
            rating: "3D",
            list: [],
            listSessionId: []
        }, {
            rating: "IMAX",
            list: [],
            listSessionId: []
        }];

        sessions.forEach((session) => {
            if (
                (selectedCity === '' || session.city === selectedCity) &&
                (selectedBairro === '' || session.neighborhood === selectedBairro)
            ) {
                if (session.type === 0) {
                    lista[0].list.push(session.time);
                    lista[0].listSessionId.push(session.SessionId);
                } else if (session.type === 1) {
                    lista[1].list.push(session.time);
                    lista[1].listSessionId.push(session.SessionId);
                } else if (session.type === 2) {
                    lista[2].list.push(session.time);
                    lista[2].listSessionId.push(session.SessionId);
                }
            }
        });

        setSessoes(lista);
    }, [sessions, selectedCity, selectedBairro]);

    useEffect(() => {
        fetch('http://localhost:3000/movies/' + title)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
            })
            .catch(error => {
                console.error('Erro ao buscar sessões:', error);
            });
    }, [title]);

    // Função para filtrar sessões
    const filterSessions = () => {
        if (!selectedRating) return sessoes;
        return sessoes.filter(sessao => sessao.rating === selectedRating);
    };

    // Função para determinar a classe do botão
    const getButtonClass = (rating) => {
        return selectedRating === rating || (selectedRating === '' && rating === 'Todos') ? styles.sessiontype : styles.sessiontype2;
    };

    return (
        <>
            <main className={styles.fundo}>
                <div className={styles.info}>
                    <Banner
                        imagem={movie.imageURL}
                        nome={movie.title}
                        genero={movie.genre}
                        desc={movie.synopse}
                        rating={movie.ageRating}
                        city={setSelectedCity}
                        bairro={setSelectedBairro}
                    ></Banner>
                </div>
                <div className={styles.horarios}>
                    <div className={styles.tipoDeSessao}>
                        <div className={styles.buttons}>
                            <button
                                className={getButtonClass('2D')}
                                onClick={() => setSelectedRating('2D')}
                            >
                                2D
                            </button>
                            <button
                                className={getButtonClass('3D')}
                                onClick={() => setSelectedRating('3D')}
                            >
                                3D
                            </button>
                            <button
                                className={getButtonClass('IMAX')}
                                onClick={() => setSelectedRating('IMAX')}
                            >
                                IMAX
                            </button>
                            <button
                                className={getButtonClass('')}
                                onClick={() => setSelectedRating('')}
                            >
                                Todos
                            </button>
                        </div>
                    </div>
                    {filterSessions().map(sessao => {
                        if (sessao.list.length > 0) {
                            return (
                                <Session
                                    key={sessao.rating}
                                    rating={sessao.rating}
                                    sessions={sessao.list}
                                    sessionsId={sessao.listSessionId}
                                ></Session>
                            );
                        }
                        return null;
                    })}
                </div>
            </main>
        </>
    );
}