import React, { useState } from 'react';
import styles from './combos.module.css';

export function Combos(props) {

   var nomes = [props.nome1, props.nome2, props.nome3];
   var precos = [props.preco1, props.preco2, props.preco3];
   var imagens = [props.imagem1, props.imagem2, props.imagem3];
   var descs = [props.desc1, props.desc2, props.desc3];
   var setas = [props.seta1, props.seta2, props.seta3];

  return (
    <>
      <section className={styles.carrousel}>
        {nomes.map((nome, index) => (
          <div key={index} className={styles.combo}>
            <div className={styles.desc}>
              <div className={setas[index] === '1' ? styles.arrow1 : styles.arrow2}>
         
              </div>
              <img src={imagens[index]} alt={nome} />
              <section>
                <h1>{nome}</h1>
                <p>R$ {precos[index]}</p>
                <p>{descs[index]}</p>
              </section>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}