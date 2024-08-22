import { Dropdown } from "../components/Dropdown.jsx";

import styles from './banner.module.css';
import '../global.css';

export function Banner({imagem, genero, nome, desc}) {
    const Cidade = [ 
        'Rio de Janeiro', 'Niterói', 'São Gonçalo', 'Maricá', 'Nova iguaçu', 'Belford Roxo'
     ]
     const Bairro = [ 
        'Centro', 'Zona Sul', 'Zona Norte', 'Região Oceânica', 'Zona Oeste'
     ]
    return (
        <>
        <div className={styles.banner}>
            <img src={imagem} />  
            <section className={styles.section}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>{nome}</h1>
                        <div>12</div>
                    </div>
                    <div className={styles.desc}>
                        <h2>{genero}</h2>
                        <h2>{desc}</h2>
                    </div>  
                </div>
                <div className={styles.dropdowns}>
                    <Dropdown tipo='Cidade' children={Cidade}></Dropdown>
                    <Dropdown tipo='Bairro' children={Bairro}></Dropdown>
                </div>
            </section>
        </div>
        </>
    );
}