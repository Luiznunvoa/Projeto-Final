import { useState, useEffect } from 'react';
import { Dropdown } from "../components/Dropdown.jsx";
import { Card } from "../components/Card.jsx";
import styles from './movies.module.css';
import '../global.css';

const Generos = [ 
    'Ação', 'Comédia', 'Animação', 'Documentário', 'Drama', 'Romance', 'Musical', 'Aventura', 'Suspense', 'Histórico', 'Cotidiano', 'Mistéria', 'Investigação', 'Faroeste', 'Guerra', 'Thriller', 'Fantasia', 'Policial', 'Comédia Romantica', 'Nacional'
];

const Classificacoes = [ 
    'Livre', '+10', '+12', '+14', '+16', '+18',
];

export function Movies() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                // Considerando que os dados vêm como um array de filmes
                const filmesFormatados = data.slice(0, 6).map(filme => ({
                    imagem: filme.imageURL,
                    nome: filme.title,
                    genero: filme.genre,
                    diretor: filme.director,
                    desc: filme.synopse,
                }));
                setFilmes(filmesFormatados);
            })
            .catch(error => console.error('Erro ao buscar filmes:', error));
    }, []);

    return (
        <main className={styles.movies}>
            <div className={styles.search}>
                <section className={styles.searchbar}>
                    <input type="text" placeholder="Pesquisar filmes" />
                    <div />
                </section>
                <section className={styles.dropdowns}>
                    <Dropdown tipo='Gênero' children={Generos} />
                    <Dropdown tipo='Classificação' children={Classificacoes} />
                </section>
            </div>
            <section className={styles.mid}>
                <h1>Filmes</h1>
                <section className={styles.list}>
                    {filmes.map((filme, index) => (
                        <Card
                            key={index}
                            imagem={filme.imagem}
                            nome={filme.nome}
                            genero={filme.genero}
                            diretor={filme.diretor}
                            desc={filme.desc}
                        />
                    ))}
                </section>
                <section className={styles.pages}>
                    <div className={styles.arrowL}>
                        <div />
                    </div>
                    <div className={styles.arrowR}>
                        <div />
                    </div>
                </section>
            </section>
        </main>
    );
}