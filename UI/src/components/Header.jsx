import styles from './header.module.css'
import Icon from '../assets/Logo.svg';
import Movies from '../assets/Movies.svg'
import Sign from '../assets/Sign.svg'
import Help from '../assets/Help.svg'

export function Header(){
   return(
      <header>
            <img src={Icon} alt="Logo"/>
            <section>
               <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                  <img src={Movies} alt="Movies"/>
               </a>
               <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                  <img src={Sign} alt="Sign"/>
               </a>
               <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                  <img src={Help} alt="Help"/>
               </a>

            </section>
      </header>

   )
}