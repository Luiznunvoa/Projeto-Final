import styles from './login.module.css';
import '../global.css';
import Icon from '../assets/Logo.svg';
import { Link } from "react-router-dom";
export function Login() {
    return (
        <>
        <main className={styles.login}>
         <section className={styles.mid}>
            <section className={styles.intro}>
               <img src={Icon} alt="Logo"/>
               <h2>
                  Escolha suas sessões, reserve seus lugares e 
                  entre de cabeça em narrativas que cativam e 
                  emocionam. Este é o nosso convite para você 
                  vivenciar o cinema de maneira única. Nossa 
                  página de login é a porta de entrada para 
                  essa experiência excepcional, e estamos 
                  empolgados para compartilhar cada momento 
                  cinematográfico com você.
               </h2>
            </section>
            <div className={styles.form}>
               <h1>Login</h1>
               <h2>Faça seu login e garanta o seu lugar na diversão!</h2>
               <input className={styles.user} type='text' placeholder='Usuário ou E-mail'/>
               <input className={styles.user} type='password' placeholder='Senha'/>
               <Link to='/' className={styles.enter}>
                  <h2>
                     ENTRAR
                  </h2>
               </Link>
               <hr/>
               <Link to='/SignUp'  className={styles.register}>
                  <h2>CADASTRE-SE</h2>
               </Link>
            </div>
         </section>

        </main>

        </>
    );
}