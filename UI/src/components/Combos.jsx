import React, { useState } from 'react';
import styles from './combos.module.css';

export function Combos(props) {
  const nomes = [props.nome1, props.nome2, props.nome3];
  const precos = [props.preco1, props.preco2, props.preco3];
  const imagens = [props.imagem1, props.imagem2, props.imagem3];
  const descs = [props.desc1, props.desc2, props.desc3];
  const setas = [props.seta1, props.seta2, props.seta3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nomes.length);
  };

  const prevCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nomes.length) % nomes.length);
  };

  return (
    <>
        <div className={styles.combo}>
         <div className={styles.arrow1} onClick={prevCombo}>
         </div>
          <div className={styles.desc}>
            <img src={imagens[currentIndex]} alt={nomes[currentIndex]} />
            <section>
              <h1>{nomes[currentIndex]}</h1>
              <h2>R$ {precos[currentIndex]}</h2>
              <h2>{descs[currentIndex]}</h2>
            </section>
          </div>
          <div className={styles.arrow2} onClick={prevCombo}>
            </div>
        </div>
    </>
  );
}