import styles from './movie.module.css'
import { Link } from "react-router-dom";
import { ApplicationContext } from "../contexts/ApplicationContextProvider";
import { useContext } from "react"

export function Movie(props){
   const { title , setTitle} = useContext(ApplicationContext)
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <h3>{props.nome}</h3>
         <Link className={styles.button}to='/Sessions' onClick={() => setTitle(props.nome)}>
            <h3>SESSÔES DISPOÍVEIS</h3>
         </Link>

      </section>


      </>

   )
}