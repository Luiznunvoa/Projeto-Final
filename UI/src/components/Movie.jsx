import styles from './movie.module.css'
import { Link } from "react-router-dom";

export function Movie(props){
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <h2>{props.nome}</h2>
         <div>
            <Link to='/Checkout'>SESSÔES DISPOÍVEIS</Link>
         </div>

      </section>


      </>

   )
}