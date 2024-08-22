import styles from './movie.module.css'
import { Link } from "react-router-dom";

export function Movie(props){
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <h2>{props.nome}</h2>
         <Link className={styles.button}to='/Sessions'>
            <h3>SESSÔES DISPOÍVEIS</h3>
         </Link>

      </section>


      </>

   )
}