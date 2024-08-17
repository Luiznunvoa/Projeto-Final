import styles from './footer.module.css'
import Icon from '../assets/Icon.svg'
export function Footer(){
   return(
      <>
         <footer>
            <section>
               <h1>Endereço</h1>
               <p>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ CEP: 24210-315</p>
               <h1>Fale Conosco</h1>
               <p>contato@injunior.com.br</p>
            </section>
            <img src={Icon} alt="Movies"/>
            <iframe width="360" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Universidade%20federal%20fluminense%20instituto%20de%20computa%C3%A7%C3%A3o+(Injunior)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

         </footer>

      </>

   )
}