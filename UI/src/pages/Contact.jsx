import styles from './contact.module.css';
import { useState } from 'react';
import { Confirm} from "../components/Confirm.jsx"
import '../global.css';

export function Contact() {
    const [AccountCreated, CreateAccount] = useState(false);

    const Register = () => {
      CreateAccount(!AccountCreated);
    };

    return (
        <>
        <main className={styles.contact}>
            <section className={AccountCreated ? styles.mid1 : styles.mid}>
               <div className={styles.formbox}>
                  <h1>Contato</h1>
                  <h2>Encontrou algum problema? Envie uma mensagem!</h2>
                  <input className={styles.nome} type='text' placeholder='Nome Completo'/>
                  <input className={styles.nome} type='text' placeholder='Assunto'/>
                  <input className={styles.desc} type='text' placeholder='Descrição Detalhada'/>
                  <div onClick={Register} className={styles.submit}><h2>Enviar</h2></div>

               </div>
               {AccountCreated && (
                  <Confirm 
                    title='Mensagem Enviada!' 
                    subtitle='Obrigado por compartilhar suas observações conosco.' 
                    paragrph1='Sua contribuição é fundamental para melhorarmos continuamente a sua experiência em nosso site. Valorizamos seu tempo e dedicação ao relatar esse problema.'
                    paragrph2=''
                  />
                )}
            </section>

        </main>

        </>
    );
}