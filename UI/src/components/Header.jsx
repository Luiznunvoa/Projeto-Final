import styles from './header.module.css'
import Icon from '../assets/Logo.svg';

export function Header(){
   return(
      <header>
            <img src={Icon} alt="Logo"/>
      </header>

   )
}