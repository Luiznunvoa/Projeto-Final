import { Link } from "react-router-dom";
import styles from './movies.module.css';
import '../global.css';

export function Movies() {
    return (
        <>
         <main className={styles.movies}>
            <section className={styles.search}>
               <div className={styles.searchbar}>
                  <input type="text" placeholder="Pesquisar filmes">                  
                  </input>
                  <div>

                  </div>

               </div>

            </section>
            <section className={styles.mid}>
               <div className={styles.back}>

               </div>

            </section>
            
            
         </main>
        </>
    );
}