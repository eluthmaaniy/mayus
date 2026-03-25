// Read more bio
const readMoreBtn = document.getElementById('read-more-bio');
if (readMoreBtn) {
  readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('bio-synopsis').classList.add('hidden');
    document.getElementById('bio-full').classList.remove('hidden');
  });
}

// Show more skills
const showMoreSkills = document.getElementById('show-more-skills');
if (showMoreSkills) {
  showMoreSkills.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('hidden-skills').classList.remove('hidden');
    this.classList.add('hidden');
  });
}

// Featured Swiper (only if element exists)
if (document.querySelector('.featured-swiper')) {
  const featuredSwiper = new Swiper(".featured-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
}

// Order by (only on portfolio page)
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

// Filter buttons (only on portfolio page)
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