import styles from './signup.module.css';
import { useState } from 'react';
import { Confirm} from "../components/Confirm.jsx"
import '../global.css';

export function SignUp() {
    const [AccountCreated, CreateAccount] = useState(false);

    const Register = () => {
      CreateAccount(!AccountCreated);
    };

    return (
        <>
        <main className={styles.signup}>
            <section className={AccountCreated ? styles.mid1 : styles.mid}>
                <section className={styles.signuptext}>
                  <h1>Junte-se à Comunidade Cinematográfica! Cadastre-se Aqui!</h1>
                  <h2>
                     Seja bem-vindo à nossa comunidade apaixonada pelo mundo do cinema. 
                     Ao fazer parte do nosso espaço digital, você está prestes a mergulhar 
                     em uma experiência cinematográfica única, onde a magia das telonas 
                     ganha vida com um toque moderno. 
                  </h2>
                  <h2>
                     Nosso formulário de cadastro é o 
                     primeiro passo para embarcar nessa jornada emocionante. Ao 
                     preenchê-lo, você se tornará um membro da nossa comunidade, onde 
                     amantes do cinema se reúnem para compartilhar o entusiasmo, as emoções 
                     e as histórias que permeiam cada cena.
                  </h2>
                </section>
                <div className={styles.signupform}>
                  <h1>Registre-se</h1>
                  <input className={styles.user} type='text' placeholder='Nome'/>
                  <input className={styles.user} type='text' placeholder='Sobrenome'/>
                  <input className={styles.user} type='text' placeholder='CPF'/>
                  <input className={styles.user} type='date' placeholder='Data de Nascimento'/>
                  <input className={styles.user} type='text' placeholder='Nome de Usuário'/>
                  <input className={styles.user} type='email' placeholder='E-mail'/>
                  <input className={styles.user} type='password' placeholder='Senha'/>
                  <input className={styles.user} type='password' placeholder='Confirmar Senha'/>
                  <div onClick={Register} className={styles.enter}>
                  <h2>
                     REGISTRAR
                  </h2>
                  </div>

                </div>
                {AccountCreated && (
                  <Confirm 
                    title='Cadastro Criado!' 
                    subtitle='Bem Vindo a Nossa Comunidade Cinematográfica!' 
                    paragrph1='Obrigado por se juntar a nós na nossa comunidade cinematográfica. Sua jornada para uma experiência cinematográfica única começa agora.'
                    paragrph2='Você será redirecionado em instantes para página de login em instantes.'
                  />
                )}
            </section>
        </main>

        </>
    );
}