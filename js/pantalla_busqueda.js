document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchFilters = document.querySelectorAll('.search_filter');
    const noResults = document.getElementById('no-results');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        let hasResults = false;

        searchFilters.forEach(filter => {
            const title = filter.querySelector('.box').getAttribute('title').toLowerCase();

            if (title.includes(searchTerm)) {
                filter.style.display = '';
                hasResults = true;
            } else {
                filter.style.display = 'none';
            }
        });

        if (hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    });
});