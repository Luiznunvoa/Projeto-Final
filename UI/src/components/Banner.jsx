import { Dropdown } from "../components/Dropdown.jsx";

import styles from './banner.module.css';
import '../global.css';

export function Banner({imagem, genero, nome, desc}) {
    return (
        <>
        <div className={styles.banner}>
            <img src={imagem} />  
            <section className={styles.section}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h2>{nome}</h2>
                        <div>12</div>
                    </div>
                    <div className={styles.desc}>
                        <h2>{genero}</h2>
                        <h2>{desc}</h2>
                    </div>  
                </div>
                <div className={styles.dropdowns}>
                    <Dropdown tipo='Cidade'></Dropdown>
                    <Dropdown tipo='Bairro'></Dropdown>
                </div>
            </section>
        </div>
        </>
    );
}