// script.js

document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create a lightbox and display the clicked item
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `<img src="${item.querySelector('img').src}" alt="Portfolio Item">`;
            document.body.appendChild(lightbox);

            // Close the lightbox when clicked
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});
