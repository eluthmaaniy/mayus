// Basic swiper
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            768: { slidesPerView: 'auto', spaceBetween: 24 }
        }
    });
}

// Featured swiper
if (document.querySelector('.featured-swiper')) {
    const featuredSwiper = new Swiper(".featured-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
        },
    });
}

// Order by
const orderBy = document.getElementById('orderBy');
if (orderBy) {
    orderBy.addEventListener('change', function() {
        const value = this.value;
        const grid = document.getElementById('portfolioGrid');
        const items = Array.from(grid.children);
        if (value === 'popular' || value === 'rating' || value === 'category') {
            items.sort(() => Math.random() - 0.5);
            items.forEach(item => grid.appendChild(item));
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            const filterValue = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                item.style.display =
                    (filterValue === 'all' || item.getAttribute('data-category') === filterValue) ?
                    'block' : 'none';
            });
        });
    });
});