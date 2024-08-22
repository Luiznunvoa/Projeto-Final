import React, { useState } from 'react';
import styles from './combos.module.css';

export function Combos({ combos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % combos.length);
  };

  const prevCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + combos.length) % combos.length);
  };

  const { nome, preco, imagem, desc } = combos[currentIndex];

  return (
    <div className={styles.combo}>
      <div className={styles.arrow1} onClick={prevCombo}></div>
      <div className={styles.desc}>
        <img src={imagem} alt={nome} />
        <section>
          <h1>{nome}</h1>
          <h2>R$ {preco}</h2>
          <h2>{desc}</h2>
        </section>
      </div>
      <div className={styles.arrow2} onClick={nextCombo}></div>
    </div>
  );
}