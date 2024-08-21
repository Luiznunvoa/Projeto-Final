import styles from './checkout.module.css';
import { Seats } from "../components/Seats.jsx";
import '../global.css';

import capa1Image from '../assets/Capa1.png';
import seatIcon from "../assets/seatIcon.svg";

export function Checkout() {
    return (
        <>
        <main className={styles.checkout}>
            <section className={styles.mid}>
                <div className={styles.chosenSeats}>
                    <div className={styles.chosenSeatsTop}>
                        <img src={capa1Image}  className={styles.imageURL}></img>
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
                            <img src={seatIcon}></img>
                            <span>Assentos escolhidos</span>
                        </div>
                        <div className={styles.seats}></div>
                        <button>Confirmar</button>
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
            </section>
        </main>
        </>
    );
}