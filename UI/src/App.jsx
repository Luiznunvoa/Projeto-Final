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
          <Combos nome1="Pipoca (P)" nome2="Pipoca (G)" nome3="Duo Pipoca (M) + Refri" 
          preco1 = "11,99" preco2 = "11,99" preco3 = "11,99" 
          imagem1= "/src/assets/Pipoca.svg" imagem2= "/src/assets/Pipoca.svg" imagem3="/src/assets/Promo.svg"
          desc1="Nada diz 'cinema' como o aroma inconfundível de pipoca estourando. E quando se trata de uma porção de pipoca pequena, a magia se torna ainda mais irresistível. Imagine uma explosão de sabores em miniatura, onde cada grão é um pedacinho de felicidade."
          desc2="No reino da experiência cinematográfica, uma rainha reina supremamente: a pipoca grande, uma verdadeira protagonista em cada tela de prata. Ela transcende o mero lanche e se transforma em uma jornada culinária que rivaliza com as tramas mais emocionantes."
          desc3="O 'Duo Pipoca + Refri' é mais do que um lanche; é uma tradição que traz à tona as melhores lembranças de ir ao cinema. Compartilhado entre amigos, dividido com a família ou desfrutado em momentos de autocuidado, este combo é um símbolo da felicidade encontrada nos momentos mais simples."
          seta1 = '1'
          seta2 = '2'
          seta3 = '1'
         />
         <h1 className={styles.title}>Em Cartaz</h1>
        </div>


      </section>
      <Footer />
    </main>
  )
}

