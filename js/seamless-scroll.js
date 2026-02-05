/**
 * Improved Seamless Page Scrolling
 * - Shows subtle animation when user reaches bottom
 * - User can opt-in to load next page
 * - Adds active state to navigation
 * - Smooth transitions without page refresh
 */

class ImprovedSeamlessScroll {
  constructor() {
    // Define page sequence with both paths and identifiers
    this.pages = [
      { id: 'about', path: '/', name: 'About', label: 'About' },
      { id: 'services', path: '/services', name: 'Services', label: 'Services' },
      { id: 'reviews', path: '/reviews', name: 'Reviews', label: 'Reviews' },
      { id: 'portfolio', path: '/portfolio', name: 'Portfolio', label: 'Portfolio' },
      { id: 'contact', path: '/contact', name: 'Contact', label: 'Contact' }
    ];

    this.currentPageIndex = this.getCurrentPageIndex();
    this.isLoading = false;
    this.hasShownIndicator = false;
    this.scrollThreshold = 400; // Distance from bottom to show indicator
    
    this.init();
  }

  init() {
    console.log('[v0] SeamlessScroll initialized for page:', this.getCurrentPageName());
    
    // Set active navigation link
    this.updateActiveNavLink();
    
    // Add scroll listener
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    
    // Handle history back/forward
    window.addEventListener('popstate', (e) => this.handlePopState(e));
    
    // Create the bottom indicator element
    this.createBottomIndicator();
  }

  getCurrentPageIndex() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const pathMap = {
      '': 0,
      '/': 0,
      '/services': 1,
      '/reviews': 2,
      '/portfolio': 3,
      '/contact': 4
    };
    
    return pathMap[path] !== undefined ? pathMap[path] : 0;
  }

  getCurrentPageName() {
    return this.pages[this.currentPageIndex].name;
  }

  updateActiveNavLink() {
    // Find all navigation links
    const navLinks = document.querySelectorAll('.md\\:col-span-9 .flex a, .md\\:col-span-9 > .flex > a');
    const allNavLinks = Array.from(document.querySelectorAll('a')).filter(a => {
      const text = a.textContent.trim();
      return ['About', 'Services', 'Reviews', 'Portfolio', 'Contact'].includes(text);
    });

    allNavLinks.forEach((link, index) => {
      link.classList.remove('border-b-2', 'border-hover', 'pb-1');
      
      if (index === this.currentPageIndex) {
        link.classList.add('border-b-2', 'border-hover', 'pb-1');
        link.style.color = '#1DBF73'; // hover color
      }
    });
  }

  createBottomIndicator() {
    // Remove old indicator if exists
    const oldIndicator = document.getElementById('seamless-scroll-indicator');
    if (oldIndicator) oldIndicator.remove();

    // Create new indicator
    const indicator = document.createElement('div');
    indicator.id = 'seamless-scroll-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0px;
      background: linear-gradient(to top, rgba(29, 191, 115, 0.15), transparent);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease, height 0.3s ease;
      z-index: 40;
    `;

    // Add next page button/prompt
    const prompt = document.createElement('div');
    prompt.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border: 2px solid #1DBF73;
      border-radius: 50px;
      padding: 12px 24px;
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: none;
      z-index: 50;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(29, 191, 115, 0.2);
      font-size: 14px;
      font-weight: 500;
      color: #222325;
      white-space: nowrap;
    `;
    
    const nextPage = this.pages[this.currentPageIndex + 1];
    if (nextPage) {
      prompt.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>Scroll to explore <strong>${nextPage.label}</strong></span>
          <i class="ri-arrow-down-line" style="font-size: 16px; animation: bounce 2s infinite;"></i>
        </div>
      `;
      prompt.style.pointerEvents = 'auto';
      prompt.onclick = () => this.loadNextPage();
    }

    document.body.appendChild(indicator);
    document.body.appendChild(prompt);

    // Add bounce animation
    if (!document.querySelector('#seamless-scroll-styles')) {
      const style = document.createElement('style');
      style.id = 'seamless-scroll-styles';
      style.textContent = `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .seamless-scroll-active {
          animation: fadeInUp 0.4s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }

    this._indicator = indicator;
    this._prompt = prompt;
  }

  handleScroll() {
    if (this.isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - scrollPosition;

    // Show indicator when near bottom and there's a next page
    if (distanceFromBottom < this.scrollThreshold && this.currentPageIndex < this.pages.length - 1) {
      if (!this.hasShownIndicator) {
        this.showBottomIndicator();
        this.hasShownIndicator = true;
      }
    } else {
      if (this.hasShownIndicator) {
        this.hideBottomIndicator();
        this.hasShownIndicator = false;
      }
    }
  }

  showBottomIndicator() {
    if (this._indicator && this._prompt) {
      this._indicator.style.opacity = '1';
      this._indicator.style.height = '120px';
      
      // Add active class for animation
      this._prompt.classList.add('seamless-scroll-active');
      this._prompt.style.opacity = '1';
      this._prompt.style.transform = 'translateX(-50%) translateY(0)';
    }
  }

  hideBottomIndicator() {
    if (this._indicator && this._prompt) {
      this._indicator.style.opacity = '0';
      this._indicator.style.height = '0px';
      
      this._prompt.classList.remove('seamless-scroll-active');
      this._prompt.style.opacity = '0';
      this._prompt.style.transform = 'translateX(-50%) translateY(20px)';
    }
  }

  async loadNextPage() {
    if (this.isLoading || this.currentPageIndex >= this.pages.length - 1) return;

    this.isLoading = true;
    const nextPageIndex = this.currentPageIndex + 1;
    const nextPage = this.pages[nextPageIndex];

    console.log('[v0] Loading next page:', nextPage.name);

    try {
      // Fetch the next page
      const response = await fetch(nextPage.path);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');

      // Find main content container
      const newMainContent = newDoc.querySelector('[class*="md:col-span-9"]');
      const currentMainContent = document.querySelector('[class*="md:col-span-9"]');

      if (newMainContent && currentMainContent) {
        // Hide indicator during transition
        this.hideBottomIndicator();

        // Smooth fade transition
        currentMainContent.style.transition = 'opacity 0.4s ease-in-out';
        currentMainContent.style.opacity = '0.3';

        // Replace content
        setTimeout(() => {
          currentMainContent.innerHTML = newMainContent.innerHTML;
          currentMainContent.style.opacity = '0';
          
          // Fade in new content
          setTimeout(() => {
            currentMainContent.style.opacity = '1';
            
            // Reset scroll
            setTimeout(() => {
              currentMainContent.style.transition = 'none';
              window.scrollTo({ top: 0, behavior: 'smooth' });
              
              // Update state
              this.currentPageIndex = nextPageIndex;
              this.hasShownIndicator = false;
              
              // Update URL
              window.history.pushState(
                { pageIndex: nextPageIndex },
                nextPage.name,
                nextPage.path
              );

              // Reinitialize
              this.updateActiveNavLink();
              this.createBottomIndicator();
              
              // Re-run page-specific scripts
              this.reinitializePageScripts(newDoc);
              
              this.isLoading = false;
              
              console.log('[v0] Transitioned to:', nextPage.name);
            }, 50);
          }, 50);
        }, 400);
      }
    } catch (error) {
      console.error('[v0] Error loading next page:', error);
      this.isLoading = false;
    }
  }

  reinitializePageScripts(newDoc) {
    // Re-run footer date if available
    if (window.updateFooterDate && typeof window.updateFooterDate === 'function') {
      window.updateFooterDate();
    }

    // Re-initialize any other page-specific functions
    if (window.initializePage && typeof window.initializePage === 'function') {
      window.initializePage();
    }
  }

  handlePopState(e) {
    console.log('[v0] History navigation detected');
    // Simple page reload on back/forward for now
    // More sophisticated handling can be added if needed
    window.location.reload();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.seamlessScroll = new ImprovedSeamlessScroll();
  });
} else {
  window.seamlessScroll = new ImprovedSeamlessScroll();
}
