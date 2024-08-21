import styles from './checkout.module.css';
import { Combos } from "../components/Combos.jsx";
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
                  <div className={styles.mapheader}>
                     
                  </div>
                     
                </div>
            </section>
        </main>
        </>
    );
}