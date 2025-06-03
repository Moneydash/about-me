// Smooth scroll to section
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    // Show/hide back-to-top button
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
    // Highlight nav for active section
    highlightActiveNav();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Highlight nav links for active section
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[data-section]');
    const navLinks = document.querySelectorAll('nav a');
    let currentSection = '';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Fade-in animation for sections
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('section[data-section]');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll);