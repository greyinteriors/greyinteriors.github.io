document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceTiles = document.querySelectorAll('.service-tile');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Loop through all tiles and filter them
            serviceTiles.forEach(tile => {
                if (filterValue === 'all' || tile.getAttribute('data-category') === filterValue) {
                    tile.classList.remove('hide');
                } else {
                    tile.classList.add('hide');
                }
            });
        });
    });
});
