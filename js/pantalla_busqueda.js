document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchFilters = document.querySelectorAll('.search_filter');
    const noResults = document.getElementById('no-results');
    const textoPeliculas = document.getElementById('texto-peliculas');
    const textoSeries = document.getElementById('texto-series');
    const gridPeliculas = document.querySelector('.grid-peliculas');
    const gridSeries = document.querySelector('.grid-series');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        let hasPeliculasResults = false;
        let hasSeriesResults = false;

        searchFilters.forEach(filter => {
            const title = filter.querySelector('.box').getAttribute('title').toLowerCase();
            const section = filter.closest('.grid-peliculas, .grid-series');

            if (title.includes(searchTerm)) {
                filter.style.display = '';
                if (section.classList.contains('grid-peliculas')) {
                    hasPeliculasResults = true;
                } else if (section.classList.contains('grid-series')) {
                    hasSeriesResults = true;
                }
            } else {
                filter.style.display = 'none';
            }
        });

        // Mostrar/ocultar resultados de películas
        if (hasPeliculasResults) {
            textoPeliculas.style.display = 'block';
            gridPeliculas.style.display = 'grid';
        } else {
            textoPeliculas.style.display = 'none';
            gridPeliculas.style.display = 'none';
        }

        // Mostrar/ocultar resultados de series
        if (hasSeriesResults) {
            textoSeries.style.display = 'block';
            gridSeries.style.display = 'grid';
        } else {
            textoSeries.style.display = 'none';
            gridSeries.style.display = 'none';
        }

        // Mostrar mensaje de error si no se encuentran ni películas ni series
        if (!hasPeliculasResults && !hasSeriesResults) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
});
