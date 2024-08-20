import styles from './movie.module.css'

export function Movie(props){
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <h2>{props.nome}</h2>
         <div>
            SESSÔES DISPOÍVEIS
         </div>

      </section>


      </>

   )
}