import styles from './contact.module.css';
import '../global.css';

export function Contact() {
    return (
        <>
        <main className={styles.contact}>
            <section className={styles.mid}>
               <div className={styles.formbox}>
                  <h1>Contato</h1>
                  <h2>Encontrou algum problema? Envie uma mensagem!</h2>
                  <input className={styles.nome} type='text' placeholder='Nome Completo'/>
                  <input className={styles.nome} type='text' placeholder='Assunto'/>
                  <input className={styles.desc} type='text' placeholder='Descrição Detalhada'/>
                  <div className={styles.submit}><h2>Enviar</h2></div>

               </div>
               
            </section>

        </main>

        </>
    );
}