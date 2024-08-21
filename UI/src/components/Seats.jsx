import styles from './seats.module.css';
import React, { useState } from 'react';
import '../global.css';

export function Seats() {
    const [selectedSeats, setSelectedSeats] = useState(Array(10).fill(Array(18).fill(false)));
    const Alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const totalSeats = 18;

    const toggleSeat = (rowIndex, seatIndex) => {
        setSelectedSeats(prevState => {
            const newSeats = prevState.map((row, rIdx) => 
                rIdx === rowIndex ? row.map((seat, sIdx) => sIdx === seatIndex ? !seat : seat) : row
            );
            return newSeats;
        });
    };

    const seatRows = Alfa.map((letter, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
            <h2>{letter}</h2>
            {Array.from({ length: totalSeats }).map((_, seatIndex) => (
                <div 
                    key={seatIndex} 
                    className={selectedSeats[rowIndex][seatIndex] ? styles.seat2 : styles.seat}
                    onClick={() => toggleSeat(rowIndex, seatIndex)}
                ></div>
            ))}
            <h2>{letter}</h2>
        </div>
    ));

    return <>{seatRows}</>;
}