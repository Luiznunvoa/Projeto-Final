import { useState, useEffect } from 'react';
import { Dropdown } from "../components/Dropdown.jsx";
import { Card } from "../components/Card.jsx";
import styles from './movies.module.css';
import '../global.css';

const Generos = [ 
    'Todos', 
    'Action', 'Comedy', 'Animation', 'Horror', 'Drama', 'Romance', 'Music', 'Adventure', 'Sci-Fi', 'Fantasy', 'Thriller', 'History', 'Mystery', 'War', 'Biography', 'Western'
];

const Classificacoes = [
    'Todas',  
    '+6', '+10', '+12', '+14', '+16', '+18',
];

export function Movies() {
    const [filmes, setFilmes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [ActualPage, setActualPage] = useState(1); // Adicionando a variável ActualPage
    const [totalPages, setTotalPages] = useState(1); // Adicionando a variável totalPages

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                setFilmes(data);
                setTotalPages(Math.ceil(data.length / 6)); // Calcula o número total de páginas
            })
            .catch(error => {
                console.error('Erro ao buscar filmes:', error);
            });
    }, []);

    const handleNext = () => {
        if (currentIndex + 6 < filmes.length) {
            setCurrentIndex(currentIndex + 6);
            setActualPage(ActualPage + 1); // Incrementa a página atual
        }
    };

    const handlePrevious = () => {
        if (currentIndex - 6 >= 0) {
            setCurrentIndex(currentIndex - 6);
            setActualPage(ActualPage - 1); // Decrementa a página atual
        }
    };

    // Funções para selecionar gênero e classificação
    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre === 'Todos' ? '' : genre);
        setCurrentIndex(0); // Reinicia o índice ao aplicar o filtro
        setActualPage(1); // Reinicia a página para 1
    };

    const handleRatingSelect = (rating) => {
        const ratingNumber = rating === 'Todas' ? '' : (rating === 'Livre' ? 0 : parseInt(rating.replace('+', '')));
        setSelectedRating(ratingNumber);
        setCurrentIndex(0); // Reinicia o índice ao aplicar o filtro
        setActualPage(1); // Reinicia a página para 1
    };

    // Filtra os filmes com base no termo de pesquisa, gênero e classificação
    const filmesFiltrados = filmes.filter(filme => 
        filme.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenre === '' || filme.genre === selectedGenre) &&
        (selectedRating === '' || filme.ageRating === selectedRating)
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
                            class={filme.ageRating}
                        />
                    ))}
                </section>
                <section className={styles.pages}>
                    <div className={styles.arrowL} onClick={handlePrevious}>
                        <div />
                    </div>

                    {/* Mostra as duas primeiras páginas */}
                    <div className={ActualPage === 1 ? styles.tyle2 : styles.tyle}><h2>{1}</h2></div>
                    <div className={ActualPage === 2 ? styles.tyle2 : styles.tyle}><h2>{2}</h2></div>

                    {/* Mostra "..." ou a página atual */}
                    <div className={(ActualPage <= 2 || ActualPage >= totalPages - 1) ? styles.tyle : styles.tyle2}>
                        <h2>{(ActualPage <= 2 || ActualPage >= totalPages - 1) ? '...' : ActualPage}</h2>
                    </div>

                    {/* Mostra as duas últimas páginas */}
                    <div className={ActualPage === totalPages - 1 ? styles.tyle2 : styles.tyle}><h2>{totalPages-1}</h2></div>
                    <div className={ActualPage === totalPages ? styles.tyle2 : styles.tyle}><h2>{totalPages}</h2></div>

                    <div className={styles.arrowR} onClick={handleNext}>
                        <div />
                    </div>
                </section>
            </section>
        </main>
    );
}