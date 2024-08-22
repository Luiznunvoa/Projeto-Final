import { NavLink } from "react-router-dom";
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
                        <NavLink to='/' style={{textDecoration : 'none'}} key={sessao}>
                            <button key={sessao}>{sessao}</button>
                        </NavLink>   
                    )
                })}
            </div>
        </div>
        </>
    );
}