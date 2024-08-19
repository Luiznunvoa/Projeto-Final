import styles from './movie.module.css'

export function Movie(props){
   return(
      <>
      <section className={styles.movie}>
         <img src={props.imagem}></img>
         <p>{props.nome}</p>
         <div>
            SESSÔES DISPOÍVEIS
         </div>

      </section>


      </>

   )
}