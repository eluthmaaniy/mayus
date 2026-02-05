/**
 * Seamless Page Scrolling
 * Automatically transitions between pages when user scrolls to the bottom
 * No page refresh - uses fetch API and History API
 */

class SeamlessScroll {
  constructor() {
    // Define page sequence
    this.pages = [
      { id: 'home', path: '/', name: 'About' },
      { id: 'services', path: '/services', name: 'Services' },
      { id: 'reviews', path: '/reviews', name: 'Reviews' },
      { id: 'portfolio', path: '/portfolio', name: 'Portfolio' },
      { id: 'contact', path: '/contact', name: 'Contact' }
    ];

    // Get current page from data attribute or URL
    this.currentPageIndex = this.getCurrentPageIndex();
    
    // Threshold: trigger page transition when user is within this many pixels from bottom
    this.scrollThreshold = 300;
    
    // Prevent multiple simultaneous loads
    this.isLoading = false;
    
    // Scroll listener
    this.onScroll = this.handleScroll.bind(this);
    
    this.init();
  }

  init() {
    // Add scroll listener
    window.addEventListener('scroll', this.onScroll, { passive: true });
    console.log('[v0] SeamlessScroll initialized for page:', this.getCurrentPageName());
  }

  getCurrentPageIndex() {
    const pathMap = {
      '/': 0,
      '/services': 1,
      '/reviews': 2,
      '/portfolio': 3,
      '/contact': 4,
      '/services/': 1,
      '/reviews/': 2,
      '/portfolio/': 3,
      '/contact/': 4
    };
    
    const path = window.location.pathname;
    return pathMap[path] !== undefined ? pathMap[path] : 0;
  }

  getCurrentPageName() {
    return this.pages[this.currentPageIndex].name;
  }

  handleScroll() {
    if (this.isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - scrollPosition;

    // Check if user is near bottom
    if (distanceFromBottom < this.scrollThreshold) {
      console.log('[v0] User near bottom, distance from bottom:', distanceFromBottom);
      
      // Check if there's a next page
      if (this.currentPageIndex < this.pages.length - 1) {
        this.loadNextPage();
      }
    }
  }

  async loadNextPage() {
    this.isLoading = true;
    const nextPageIndex = this.currentPageIndex + 1;
    const nextPage = this.pages[nextPageIndex];

    console.log('[v0] Loading next page:', nextPage.name, 'from path:', nextPage.path);

    try {
      // Fetch the next page
      const response = await fetch(nextPage.path);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      
      // Parse the HTML
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
      
      // Extract main content (everything in the main container)
      const newMainContent = newDoc.querySelector('.md\\:col-span-9, [class*="col-span-9"]') || 
                            newDoc.querySelector('main') ||
                            newDoc.body;
      
      const currentMainContent = document.querySelector('.md\\:col-span-9, [class*="col-span-9"]') ||
                                document.querySelector('main');

      if (newMainContent && currentMainContent) {
        // Smooth transition: fade out, replace, fade in
        currentMainContent.style.opacity = '0.5';
        
        // Replace content
        currentMainContent.innerHTML = newMainContent.innerHTML;
        
        // Re-initialize any scripts that were in the new content
        this.reinitializeScripts(newDoc);
        
        // Update page index and history
        this.currentPageIndex = nextPageIndex;
        
        // Update browser history (no page reload)
        window.history.pushState(
          { pageIndex: nextPageIndex },
          nextPage.name,
          nextPage.path
        );
        
        // Fade back in
        currentMainContent.style.opacity = '1';
        
        // Smooth scroll to top of content
        currentMainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        console.log('[v0] Page transitioned to:', nextPage.name);
      }
    } catch (error) {
      console.error('[v0] Error loading next page:', error);
    } finally {
      this.isLoading = false;
    }
  }

  reinitializeScripts(newDoc) {
    // Re-run any page-specific scripts
    const scripts = newDoc.querySelectorAll('script:not([src])');
    
    scripts.forEach(script => {
      if (script.textContent && !script.src) {
        try {
          eval(script.textContent);
        } catch (e) {
          console.warn('[v0] Error reinitializing script:', e);
        }
      }
    });

    // Reinitialize external scripts like footer-date.js
    this.reinitializeFunctions();
  }

  reinitializeFunctions() {
    // Re-run footer date update if it exists
    if (window.updateFooterDate && typeof window.updateFooterDate === 'function') {
      window.updateFooterDate();
    }

    // Re-run any other initialization functions
    if (window.initializePage && typeof window.initializePage === 'function') {
      window.initializePage();
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}

// Initialize seamless scroll when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.seamlessScroll = new SeamlessScroll();
  });
} else {
  window.seamlessScroll = new SeamlessScroll();
}
