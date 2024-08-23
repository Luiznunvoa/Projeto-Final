import { Link } from "react-router-dom";
import styles from './session.module.css';
import '../global.css';

export function Session({rating, sessions, sessionsId}) {
    const sessoes = sessions.map((sessao, index) => {
        return {
            time: sessao, // elemento da primeira lista
            SessionId: sessionsId[index] // elemento correspondente da segunda lista
        };
    });
    return (
        <>
        <div className={styles.wrapperSessions}>
            <div>{rating}</div>
            <div className={styles.sessions}>
                {sessoes.map(sessao => {
                    return (
                        <Link to='/Checkout' className={styles.button} key={sessao.SessionId}>{sessao.time}</Link> 
                    )
                })}
            </div>
        </div>
        </>
    );
}