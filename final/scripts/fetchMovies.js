export async function fetchMovies() {
    try {
        const response = await fetch('data/movies.json');
        if (!response.ok) throw new Error('Erro ao buscar filmes');
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.error(error);
        return [];
    }
}
