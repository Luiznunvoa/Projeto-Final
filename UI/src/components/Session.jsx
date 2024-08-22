import { Link } from "react-router-dom";
import styles from './session.module.css';
import '../global.css';

export function Session({rating, sessions}) {

    return (
        <>
        <div className={styles.wrapperSessions}>
            <div>{rating}</div>
            <div className={styles.sessions}>
                {sessions.map(sessao => {
                    return (
                        <Link to='/Checkout' className={styles.button} key={sessao}>{sessao}</Link> 
                    )
                })}
            </div>
        </div>
        </>
    );
}