import styles from './seats.module.css';
import React from 'react';
import '../global.css';

export function Seats() {
    const seatRows = [];
    const Alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J']

    for (let i = 0; i < 10; i++) {
            seatRows.push(
                <div key={i} className={styles.row1}>
                    {<h2>{Alfa[i]}</h2>}
                    {<h2>{Alfa[i]}</h2>}
                </div>
            );
    }

    return <>{seatRows}</>;
}