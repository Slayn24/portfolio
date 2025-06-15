// Helper function to animate element
function animateElement(el, props, options) {
    const {
        opacity = 1,
        transform = 'none',
        duration = 500, // faster default duration
        delay = 0
    } = options;

    el.style.transition = `all ${duration}ms ease-out ${delay}ms`;
    el.style.opacity = opacity;
    el.style.transform = transform;
}

// Animate hero elements on page load
window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-desc');
    const heroBtn = document.querySelector('.hero-btn');
    const heroVideo = document.querySelector('.hero-video');

    if (heroTitle) {
        heroTitle.style.opacity = 0;
        heroTitle.style.transform = 'translateY(60px)';
        setTimeout(() => animateElement(heroTitle, {}, { transform: 'translateY(0)', duration: 700 }), 0);
    }

    if (heroDesc) {
        heroDesc.style.opacity = 0;
        heroDesc.style.transform = 'translateY(40px)';
        setTimeout(() => animateElement(heroDesc, {}, { transform: 'translateY(0)', duration: 600 }), 200);
    }

    if (heroBtn) {
        heroBtn.style.opacity = 0;
        heroBtn.style.transform = 'translateY(30px)';
        setTimeout(() => animateElement(heroBtn, {}, { transform: 'translateY(0)', duration: 600 }), 400);
    }

    if (heroVideo) {
        heroVideo.style.opacity = 0;
        heroVideo.style.transform = 'translateX(60px)';
        setTimeout(() => animateElement(heroVideo, {}, { transform: 'translateX(0)', duration: 700 }), 300);
    }
});

// Scroll-triggered animation for biodiv-card
function revealOnScroll() {
    const cards = document.querySelectorAll('.biodiv-card');

    cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.85;

        if (rect.top < triggerPoint && !card.classList.contains('visible')) {
            card.style.opacity = 0;
            card.style.transform = 'translateY(60px)';
            setTimeout(() => {
                animateElement(card, {}, {
                    transform: 'translateY(0)',
                    duration: 300, // faster card animation
                    delay: i * 30   // faster stagger
                });
                card.classList.add('visible');
            }, 0);
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
