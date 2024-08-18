import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {Combos} from "./components/Combos.jsx"
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
          <section className={styles.carrousel}>
            <Combos 
              nome="Pipoca (P)" 
              preco = "11,99" 
              imagem="/src/assets/Pipoca.svg" 
              desc="Nada diz 'cinema' como o aroma inconfundível de pipoca estourando. E quando se trata de uma porção de pipoca pequena, a magia se torna ainda mais irresistível. Imagine uma explosão de sabores em miniatura, onde cada grão é um pedacinho de felicidade."
              seta='1'
            />
            <Combos 
              nome="Pipoca (G)" 
              preco = "13,99" 
              imagem="/src/assets/Pipoca.svg" 
              desc="No reino da experiência cinematográfica, uma rainha reina supremamente: a pipoca grande, uma verdadeira protagonista em cada tela de prata. Ela transcende o mero lanche e se transforma em uma jornada culinária que rivaliza com as tramas mais emocionantes."
              seta="2"
            />
            <Combos 
              nome="Duo Pipoca (M) + Refri" 
              preco = "16,99" 
              imagem="/src/assets/Promo.svg" 
              desc="O 'Duo Pipoca + Refri' é mais do que um lanche; é uma tradição que traz à tona as melhores lembranças de ir ao cinema. Compartilhado entre amigos, dividido com a família ou desfrutado em momentos de autocuidado, este combo é um símbolo da felicidade encontrada nos momentos mais simples."
              seta="1"
            />
          </section>
        </div>


      </section>
      <Footer />
    </main>
  )
}

