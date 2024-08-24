import styles from './seats.module.css';
import React, { useContext, useState, useEffect } from "react"
import { ApplicationContext } from "../contexts/ApplicationContextProvider.jsx";
import '../global.css';

export function Seats({ onSelectSeats, setSelectedSeats, selectedSeats }) {
    const Alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [totalSeats, setTotalSeats] = useState(0);
    const [userSelectedSeats, setUserSelectedSeats] = useState([]); // Estado para rastrear os assentos selecionados pelo usuário
    const { sessionId } = useContext(ApplicationContext);

    useEffect(() => {
        fetch('http://localhost:3000/seats/' + sessionId)
            .then(response => response.json())
            .then(data => {
                setSelectedSeats(data);
                setTotalSeats(18); // Defina o número total de assentos conforme necessário
            })
            .catch(error => {
                console.error('Erro ao buscar assentos:', error);
            });
    }, [sessionId, setSelectedSeats]);

    useEffect(() => {
        onSelectSeats(userSelectedSeats); // Atualiza a lista de assentos selecionados no componente pai
    }, [userSelectedSeats, onSelectSeats]);

    const handleSeatClick = (rowIndex, seatIndex) => {
        const seatId = rowIndex * totalSeats + seatIndex; // Calcula o ID único do assento com base na linha e coluna

        if (userSelectedSeats.includes(seatId)) {
            // Se o assento já foi selecionado, remova-o da seleção
            setUserSelectedSeats(userSelectedSeats.filter(id => id !== seatId));
        } else {
            // Caso contrário, adicione-o à seleção
            setUserSelectedSeats([...userSelectedSeats, seatId]);
        }
    };

    const seatRows = Alfa.map((letter, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
            <h2>{letter}</h2>
            {Array.from({ length: totalSeats }).map((_, seatIndex) => {
                const seatId = rowIndex * totalSeats + seatIndex;
                const isSelected = userSelectedSeats.includes(seatId);
                const isOccupied = selectedSeats[rowIndex + seatIndex * 10]?.ocupierCPF; // Verifica se o assento está ocupado
                return (
                    <div
                        key={seatIndex}
                        className={
                            isOccupied ? styles.seat2 :
                            isSelected ? styles.seat3 : styles.seat
                        }
                        onClick={() => !isOccupied && handleSeatClick(rowIndex, seatIndex)} // Permite seleção somente se o assento não estiver ocupado
                    ></div>
                );
            })}
            <h2>{letter}</h2>
        </div>
    ));

    return <>{seatRows}</>;
}
