import { NavLink } from "react-router-dom";

import styles from './card.module.css';
import '../global.css';

export function Card(props) {
    return (
        <>
        <div className={styles.card}>
            <img src={props.imagem} />
            <section className={styles.title}>
               <h2>{props.nome}</h2>
               <div className={
                  props.class < 10 ? styles.classificacaoL : 
                  {
                     10: styles.classificacao10,
                     12: styles.classificacao12,
                     14: styles.classificacao14,
                     16: styles.classificacao16,
                     18: styles.classificacao18
                  }[props.class]
                  }>
                  {props.class < 10 ? 'L' : props.class}
               </div>
            </section>
            <section className={styles.desc}>
               <h2>{props.genero}</h2>
               <h2>Direção:{props.diretor}</h2>
               <h2>{props.desc}</h2>
            </section>  
            <div className={styles.button}>
               <NavLink to='/Sessions' style={{textDecoration : 'none'}}>
                  <h3>Ver Sessões</h3>
               </NavLink>
            </div>          
         </div>
        </>
    );
}