import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import styles from './app.module.css'
import './global.css'
export function App() {
  return (
    <main>
      <Header />
      <section className={styles.top}>
        <section>
          <h1>Transformando Filmes em Experiências Personalizadas</h1>
          <p>Reserve Seu Assento e Viva a Magia do Cinema!</p>
        </section>
      </section>
      <section className={styles.mid}>
        <div className={styles.back}>
          <div className={styles.test}>
          </div>
          

        </div>


      </section>
      <Footer />
    </main>
  )
}

