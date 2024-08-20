import styles from './checkout.module.css';
import { Combos } from "../components/Combos.jsx";
import '../global.css';

export function Checkout() {
    return (
        <>
        <main className={styles.checkout}>
            <section className={styles.mid}>
                <div className={styles.chosenSeats}>
                    <div className={styles.chosenSeatsTop}>
                        <img className={styles.imageURL}></img>
                        <div>
                            <p className={styles.title}>Besouro Azul</p>
                            <div>
                                <p className={styles.type}>2D</p>
                                <p className={styles.time}>15:20</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chosenSeatsBottom}>
                        <div>
                            <img></img>
                            <span>Assentos escolhidos</span>
                        </div>
                        <div className={styles.seats}></div>
                        <button></button>
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