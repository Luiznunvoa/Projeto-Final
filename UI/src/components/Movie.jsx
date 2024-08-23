import styles from './movie.module.css'
import { Link } from "react-router-dom";

export function Movie(props){
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <h3>{props.nome}</h3>
         <Link className={styles.button}to='/Sessions'>
            <h3>SESSÔES DISPOÍVEIS</h3>
         </Link>

      </section>


      </>

   )
}