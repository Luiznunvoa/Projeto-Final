import styles from './login.module.css';
import '../global.css';
import Icon from '../assets/Logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

export function Login() {

   const [formResponse, setformResponse] = useState({
      user: '',
      senha: '',
  })

   const handleChange = (evento) => {
      setformResponse({
          ...formResponse,
          [evento.target.name]: evento.target.value
      })
  }

  const navigate = useNavigate()

  const handleSubmit = async (evento) => {
   evento.preventDefault()

   try {
      const response = await fetch(`http://localhost:3000/users/${formResponse.user}`, {
         method: 'GET'
      })

      if (response.ok) {
         const user = await response.json()
         if (user.senha === formResponse.senha) {
            alert('Login realizado com sucesso!')
            navigate('/')
         } else {
            alert('Senha incorreta')
         }
      }
   } catch (error) {
      console.error('Erro ao realizar o login:', error)
   }
  }

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
               <form onSubmit={handleSubmit}>
                  <input 
                     className={styles.user} 
                     type='text' 
                     placeholder='Usuário ou E-mail'
                     name='user' 
                     required 
                     onChange={handleChange}/>
                  <input 
                     className={styles.user}   
                     type='password' 
                     placeholder='Senha'
                     name='senha'
                     required 
                     onChange={handleChange}/>
                  <button type='submit' className={styles.enter}>Entrar</button>
               </form>
               <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>       
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