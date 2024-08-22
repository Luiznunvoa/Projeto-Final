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
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                setFilmes(data);
            })
            .catch(error => {
                console.error('Erro ao buscar filmes:', error);
            });
    }, []);

    const handleNext = () => {
        if (currentIndex + 6 < filmes.length) {
            setCurrentIndex(currentIndex + 6);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - 6 >= 0) {
            setCurrentIndex(currentIndex - 6);
        }
    };

    // Certifica-se de que ao final, sejam exibidos os filmes restantes mesmo que sejam menos que 6
    const filmesAtuais = filmes.slice(currentIndex, currentIndex + 6);

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
                    {filmesAtuais.map((filme, index) => (
                        <Card
                            key={index}
                            imagem={filme.imageURL}
                            nome={filme.title}
                            genero={filme.genre}
                            diretor={filme.director}
                            desc={filme.synopse}
                        />
                    ))}
                </section>
                <section className={styles.pages}>
                    <div className={styles.arrowL} onClick={handlePrevious}>
                        <div />
                    </div>
                    <div className={styles.arrowR} onClick={handleNext}>
                        <div />
                    </div>
                </section>
            </section>
        </main>
    );
}