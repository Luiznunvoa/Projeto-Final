import { useState, useEffect } from 'react';
import { Dropdown } from "../components/Dropdown.jsx";
import { Card } from "../components/Card.jsx";
import styles from './movies.module.css';
import '../global.css';

const Generos = [ 
    'Action', 'Comedy', 'Animation', 'Horror', 'Drama', 'Romance', 'Music', 'Adventure', 'Sci-Fi', 'Fantasy', 'Thriller', 'History', 'Mystery', 'War', 'Biography', 'Western'
];

const Classificacoes = [ 
    'Livre', '+10', '+12', '+14', '+16', '+18',
];

export function Movies() {
    const [filmes, setFilmes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

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

    // Funções para selecionar gênero e classificação
    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        setCurrentIndex(0); // Reinicia o índice ao aplicar o filtro
    };

    const handleRatingSelect = (rating) => {
        setSelectedRating(rating);
        setCurrentIndex(0); // Reinicia o índice ao aplicar o filtro
    };

    // Filtra os filmes com base no termo de pesquisa, gênero e classificação
    const filmesFiltrados = filmes.filter(filme => 
        filme.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenre === '' || filme.genre === selectedGenre) &&
        (selectedRating === '' || filme.rating === selectedRating)
    );

    // Certifica-se de que ao final, sejam exibidos os filmes restantes mesmo que sejam menos que 6
    const filmesAtuais = filmesFiltrados.slice(currentIndex, currentIndex + 6);

    return (
        <main className={styles.movies}>
            <div className={styles.search}>
                <section className={styles.searchbar}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar filmes" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <div />
                </section>
                <section className={styles.dropdowns}>
                    <Dropdown tipo='Gênero' children={Generos} onSelect={handleGenreSelect} />
                    <Dropdown tipo='Classificação' children={Classificacoes} onSelect={handleRatingSelect} />
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