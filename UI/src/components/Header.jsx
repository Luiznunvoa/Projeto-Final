import styles from './header.module.css'
import Icon from '../assets/Logo.svg';
import Movies from '../assets/Movies.svg'
import Sign from '../assets/Sign.svg'
import Help from '../assets/Help.svg'
import { Link } from "react-router-dom";

export function Header(){
   return(
      <header>
         <Link to="/">
            <img src={Icon} alt="Logo"/>
         </Link>
            <section>

               <Link to='Movies'>
                  <img src={Movies} alt="Movies"/>
               </Link>
               <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                  <img src={Sign} alt="Sign"/>
               </a>
               <Link to="/Contact">
                  <img src={Help} alt="Help"/>
               </Link>
            </section>
      </header>

   )
}