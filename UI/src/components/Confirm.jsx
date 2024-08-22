import styles from './confirm.module.css';
import { Link } from "react-router-dom";
import '../global.css';

export function Confirm(props) {
    return (
      <>
      <div className={styles.confirmation}>
         <h1>{props.title}</h1>
         <h2>{props.subtitle}</h2>
         <h3>{props.paragrph1}</h3>
         <h3>{props.paragrph2}</h3>
         <Link to='/'className={styles.goback}/>

      </div>

      </>
        
    );
}