import styles from './checkout.module.css';
import { useContext, useState, useEffect } from "react"
import { Seats } from "../components/Seats.jsx";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../contexts/ApplicationContextProvider.jsx";
import '../global.css';

import capa1Image from '../assets/Capa1.png';
import seatIcon from "../assets/seatIcon.svg";

export function Checkout() {
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const confirmReservation = () => setIsConfirmed(true);

    const {sessionId, setSessionId} = useContext(ApplicationContext)
    const [sessions, setSessions] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/seats/' + sessionId)
            .then(response => response.json())
            .then(data => {
                setSessions(data);
            })
            .catch(error => {
                console.error('Erro ao buscar assentos:', error);
            });
    }, []);

    const Confirmation = () => (
        <div className={`${styles.confirmation} ${isVisible ? styles.visible : ''} ${isConfirmed ? styles.confirmed : ''}`}>
            {isConfirmed ? (
                <>
                    <h1>Reserva confirmada!</h1>
                    <Link to="/" className={styles.cancel}>Voltar para a página inicial</Link>
                </>
            ) : (
                <>
                    <h1>Confirmação de Reserva!</h1>
                    <h2>Tem certeza de que deseja confirmar a reserva?</h2>
                    <section>
                        <div className={styles.cancel} onClick={toggleVisibility}>
                            <h1>CANCELAR</h1>
                        </div>
                        <div className={styles.accept} onClick={confirmReservation}>
                            <h1>CONFIRMAR</h1>
                        </div>
                    </section>
                </>
            )}
        </div>
    );

    return (
        <main className={styles.checkout}>
            <section className={`${styles.mid} ${isVisible ? styles.midVisible : ''}`}>
                <div className={styles.chosenSeats}>
                    <div className={styles.chosenSeatsTop}>
                        <img src={capa1Image} className={styles.imageURL} alt="Capa do filme" />
                        <div>
                            <h1 className={styles.title}>Besouro Azul</h1>
                            <div>
                                <h2 className={styles.type}>2D</h2>
                                <h2 className={styles.time}>15:20</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chosenSeatsBottom}>
                        <div>
                            <img src={seatIcon} alt="Ícone de assento" />
                            <span>Assentos escolhidos</span>
                        </div>
                        <div className={styles.seats}></div>
                        <button onClick={toggleVisibility}>Confirmar</button>
                    </div>
                </div>
                <div className={styles.map}>
                    <div className={styles.mapheader} />
                    <section className={styles.seatmap}>
                        <Seats />
                    </section>
                    <hr/>
                    <h2>LEGENDA</h2>
                    <section className={styles.seatypes}>
                        <div className={styles.seat1}></div>
                        <h2>Disponíveis</h2>
                        <div className={styles.seat2}></div>
                        <h2>Selecionado</h2>
                        <div className={styles.seat3}></div>
                        <h2>Comprado</h2>
                    </section>
                </div>
                <Confirmation />
            </section>
        </main>
    );
}