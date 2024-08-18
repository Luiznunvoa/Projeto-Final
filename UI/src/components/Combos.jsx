import React, { useState } from 'react';
import styles from './combos.module.css';

export function Combos(props) {
  const [currentSeta, setCurrentSeta] = useState(props.seta);

  return (
    <>
      <div className={styles.combo}>
        <div className={styles.desc}>
          <div className={currentSeta === '1' ? styles.arrow1 : styles.arrow2}>
            {/* Conteúdo opcional da seta */}
          </div>
          <img src={props.imagem} alt={props.nome} />
          <section>
            <h1>{props.nome}</h1>
            <p>R$ {props.preco}</p>
            <p>{props.desc}</p>
          </section>
        </div>
      </div>
    </>
  );
}