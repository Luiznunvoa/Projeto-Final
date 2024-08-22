import styles from './card.module.css';
import '../global.css';

export function Card(props) {
    return (
        <>
        <div className={styles.card}>
            <img src={props.imagem} />
            <section className={styles.title}>
               <h2>{props.nome}</h2>
               <div>12</div>
            </section>
            <section className={styles.desc}>
               <h2>{props.genero}</h2>
               <h2>Direção:{props.diretor}</h2>
               <h2>{props.desc}</h2>
            </section>  
            <div className={styles.button}>
               <h1>Ver Sessões</h1>
            </div>          
         </div>
        </>
    );
}