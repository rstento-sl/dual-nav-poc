/**
 * SnapLogic Documentation POC - Homepage JavaScript
 * Handles mobile menu toggle and smooth interactions
 */

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');

  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
  }
}

// Toggle dropdown menus on click
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', function(event) {
      event.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('open');
        }
      });

      // Toggle this dropdown
      dropdown.classList.toggle('open');
    });
  });
});

// Close dropdowns and mobile menu when clicking outside
document.addEventListener('click', function(event) {
  // Close dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const isClickInside = dropdown.contains(event.target);
    if (!isClickInside) {
      dropdown.classList.remove('open');
    }
  });

  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  const isClickInsideMenu = mobileMenu && mobileMenu.contains(event.target);
  const isClickOnHamburger = hamburger && hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Highlight active navigation based on current page
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;

  // Check if we're on an AutoSync page
  if (currentPath.includes('autosync')) {
    highlightDropdown('Integration Platform', 'AutoSync');
  }

  // Check if we're on an Admin Manager page
  if (currentPath.includes('admin-manager')) {
    highlightDropdown('Administration & Governance', 'Admin Manager');
  }
});

// Function to highlight dropdown and menu item
function highlightDropdown(dropdownText, menuItemText) {
  // Find all dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggleButton = dropdown.querySelector('.dropdown-toggle');
    const menuLinks = dropdown.querySelectorAll('.dropdown-menu a');

    // Check if this is the right dropdown
    if (toggleButton && toggleButton.textContent.includes(dropdownText)) {
      // Add active class to dropdown
      dropdown.classList.add('active');

      // Find and highlight the specific menu item
      menuLinks.forEach(link => {
        if (link.textContent.includes(menuItemText)) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add animation to nav cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe nav cards and topic cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.nav-card, .topic-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});

// Simple carousel rotation for What's New section
let currentCarouselIndex = 0;

function rotateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  if (items.length === 0) return;

  // Hide all items
  items.forEach(item => {
    item.style.display = 'none';
  });

  // Show current item
  items[currentCarouselIndex].style.display = 'block';

  // Move to next item
  currentCarouselIndex = (currentCarouselIndex + 1) % items.length;
}

// Start carousel if items exist
document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  if (carouselItems.length > 0) {
    rotateCarousel(); // Show first item immediately
    setInterval(rotateCarousel, 5000); // Rotate every 5 seconds
  }
});

// Set product filter when clicking product links on homepage
document.addEventListener('DOMContentLoaded', function() {
  const productLinks = document.querySelectorAll('a[data-product]');

  productLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const product = this.getAttribute('data-product');
      if (product) {
        sessionStorage.setItem('filteredProduct', product);
        sessionStorage.removeItem('showFullTree');
      }
    });
  });
});

// Console message for developers
console.log('🎉 SnapLogic Documentation POC - Dual Navigation');
console.log('📦 Product View: Browse by product and feature');
console.log('📋 Task View: Browse by workflow and task');
console.log('🔑 Keyref Architecture: 27 topics reused across views');
console.log('✨ Single Source of Truth maintained');
