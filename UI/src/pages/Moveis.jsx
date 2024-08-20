import { Dropdown } from "../components/Dropdown.jsx";
import { Link } from "react-router-dom";
import styles from './movies.module.css';
import '../global.css';

export function Movies() {
    return (
        <>
         <main className={styles.movies}>
            <section className={styles.search}>
               <div className={styles.searchbar}>
                  <input type="text" placeholder="Pesquisar filmes" />                  
                  <div />
               </div>
            <section className={styles.dropdowns}>
               <Dropdown tipo='Gênero' />
               <Dropdown tipo='Classificação' />
            </section>

            </section>
            <section className={styles.mid}>
               <h1 className={styles.title}>Filmes</h1>
               <section className={styles.list}>

               </section>

            </section>
            
            
         </main>
        </>
    );
}