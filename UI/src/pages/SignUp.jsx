import styles from './signup.module.css';
import '../global.css';
import { useState } from 'react';

export function SignUp() {

  const [formResponse, setformResponse] = useState({
    name: '',
    lastName: '',
    cpf: '',
    birthday: '',
    username: '',
    email: '',
    senha: '',
    confirmSenha: ''
});

const handleChange = (evento) => {
    setformResponse({
        ...formResponse,
        [evento.target.name]: evento.target.value
    });
};

const handleSubmit = async (evento) => {
    evento.preventDefault()

    if (formResponse.senha !== formResponse.confirmSenha) {
        alert('As senhas não conferem')
        return;
    }

    console.log('Dados do Formulário:', formResponse)

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formResponse.name,
                lastName: formResponse.lastName,
                cpf: formResponse.cpf,
                birthday: formResponse.birthday,
                username: formResponse.username,
                email: formResponse.email,
                senha: formResponse.senha
            })
        })

        if (response.ok) {
            alert('Usuário registrado com sucesso!')
        } else {
            const errorData = await response.json()
            alert(errorData.error)
        }
    } catch (error) {
        console.error('Erro ao registrar:', error)
        alert('Erro ao registrar usuário')
    }
}

    return (
        <>
        <main className={styles.signup}>
            <section className={styles.mid}>
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
                  <form onSubmit={handleSubmit}>
                  <input className={styles.user} name='name' type='text' placeholder='Nome' required onChange={handleChange} />
                  <input className={styles.user} name='lastName' type='text' placeholder='Sobrenome' required onChange={handleChange} />
                  <input className={styles.user} name='cpf' type='text' placeholder='CPF' required onChange={handleChange} />
                  <input className={styles.user} name='birthday' type='date' placeholder='Data de Nascimento' required onChange={handleChange} />
                  <input className={styles.user} name='username' type='text' placeholder='Nome de Usuário' required onChange={handleChange} />
                  <input className={styles.user} name='email' type='email' placeholder='E-mail' required onChange={handleChange} />
                  <input className={styles.user} name='senha' type='password' placeholder='Senha' required onChange={handleChange} />
                  <input className={styles.user} name='confirmSenha' type='password' placeholder='Confirmar Senha' required onChange={handleChange} />

                    <button type='submit' className={styles.enter}>REGISTRAR</button>
                  </form>
                </div>

            </section>

        </main>

        </>
    );
}