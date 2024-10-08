import styles from './footer.module.css'
import Icon from '../assets/Icon.svg'
import IG from '../assets/IG.svg'
import FB from '../assets/FC.svg'
import IN from '../assets/IN.svg'
import { Link } from "react-router-dom";
export function Footer(){
   return(
      <>
         <footer>
            <section>
               <h3>Endereço</h3>
               <h3>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ CEP: 24210-315</h3>
               <Link to="/Contact"><h2>Fale Conosco!</h2></Link>
               <h3>contato@injunior.com.br</h3>
               <section>
                  <img src={IG} alt='Instagram'></img>
                  <img src={FB} alt='Facebook'></img>
                  <img src={IN} alt='Linkedin'></img>
               </section>
            </section>
            <img className={styles.Icon} src={Icon} alt="Movies"/>
            <iframe width="360" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Universidade%20federal%20fluminense%20instituto%20de%20computa%C3%A7%C3%A3o+(Injunior)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
         </footer>
         <div className={styles.license}>© Copyright 2023. IN Junior. Todos os direitos reservados. Niterói, Brasil.</div>

      </>

   )
}