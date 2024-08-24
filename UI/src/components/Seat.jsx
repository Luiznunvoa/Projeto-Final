import { useState } from 'react';
import styles from './seat.module.css';
import '../global.css';

export function Seat(props) {
   console.log(props.row)
   console.log(props.number)

    return (
   <>
      <p className={styles.seatstattype}>{props.seatName}</p>
      <hr className={styles.separetion}/>
      <p className={styles.seatstattype}>Nome</p>
      <div className={styles.seatstats}>
         <div></div>
         <section>
            <input type='text'></input>
         </section>
      </div>
      <p className={styles.seatstattype}>CPF</p>
      <div className={styles.seatstats}>
         <div></div>
         <section>
            <input type='text'></input>
         </section>
      </div> 
   </>
    )
}