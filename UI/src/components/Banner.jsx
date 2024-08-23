import { Dropdown } from "../components/Dropdown.jsx";

import styles from './banner.module.css';
import '../global.css';

export function Banner({imagem, genero, nome, desc, rating, city, bairro}) {
    const Cidade = [
        'Todos', 
        'Rio de Janeiro', 'Niterói'
    ]
    const Bairro = [
        'Todos',
        'Centro', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Zona Leste', 'Região Oceânica'
    ]

    const handleCitySelect = (Cidade) => {
        city(Cidade === 'Todos' ? '' : Cidade);
        console.log(Cidade)
    };

    const handleBairro = (Bairro) => {
        bairro(Bairro === 'Todos' ? '' : Bairro);
        console.log(Bairro)
    };

    return (
        <>
        <div className={styles.banner}>
            <img src={imagem} />  
            <section className={styles.section}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>{nome}</h1>
                        <div className={
                    rating < 10 ? styles.classificacaoL : 
                    {
                        10: styles.classificacao10,
                        12: styles.classificacao12,
                        14: styles.classificacao14,
                        16: styles.classificacao16,
                        18: styles.classificacao18
                    }[rating]
                    }>{rating}</div>
                  </div>
                    <div className={styles.desc}>
                        <h2>{genero}</h2>
                        <h2>{desc}</h2>
                    </div>  
                </div>
                <div className={styles.dropdowns}>
                    <Dropdown tipo='Cidade' children={Cidade}  onSelect={handleCitySelect}></Dropdown>
                    <Dropdown tipo='Bairro' children={Bairro} onSelect={handleBairro}></Dropdown>
                </div>
            </section>
        </div>
        </>
    );
}