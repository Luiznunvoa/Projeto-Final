import styles from './dropdown.module.css';
import '../global.css';

export function Dropdown(props) {
    return (
        <>
        <div className={styles.dropdown}>
            <div className={styles.strip}></div>
            <h1>{props.tipo}</h1>
            <div className={styles.drop}></div>
         </div>
        </>
    );
}