let favorites = [];

export function loadFavorites() {
    const fav = localStorage.getItem('favoriteMovies');
    favorites = fav ? JSON.parse(fav) : [];
    return favorites;
}

export function saveFavorites() {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
}

export function isFavorite(id) {
    return favorites.includes(id);
}

export function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    saveFavorites();
    return favorites;
}
