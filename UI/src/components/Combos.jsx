import React, { useState } from 'react';
import styles from './combos.module.css';

export function Combos(props) {
  // Arrays para armazenar os props
  const nomes = [props.nome1, props.nome2, props.nome3];
  const precos = [props.preco1, props.preco2, props.preco3];
  const imagens = [props.imagem1, props.imagem2, props.imagem3];
  const descs = [props.desc1, props.desc2, props.desc3];
  const setas = [props.seta1, props.seta2, props.seta3];

  // Estado para controlar o índice atual do combo sendo exibido
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar no carrossel
  const nextCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nomes.length);
  };

  // Função para retroceder no carrossel
  const prevCombo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nomes.length) % nomes.length);
  };

  return (
    <>
      <section className={styles.carrousel}>
        <div className={styles.combo}>
         <div className={styles.arrow1} onClick={prevCombo}>
         </div>
          <div className={styles.desc}>
            <img src={imagens[currentIndex]} alt={nomes[currentIndex]} />
            <section>
              <h1>{nomes[currentIndex]}</h1>
              <p>R$ {precos[currentIndex]}</p>
              <p>{descs[currentIndex]}</p>
            </section>
          </div>
          <div className={styles.arrow2} onClick={prevCombo}>
            </div>
        </div>
      </section>
    </>
  );
}