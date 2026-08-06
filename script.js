/* ===== MOBILE NAV ===== */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
}
// Close mobile menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});

/* ===== DONATE PAGE CONTROLS ===== */
function selectAmount(btn) {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
function selectFreq(btn) {
    document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

/* ===== SCROLL-REVEAL ANIMATIONS ===== */
(function () {
    // Elements that should animate into view as the user scrolls.
    const revealSelectors = [
        '.section-header',
        '.stats-grid',
        '.card',
        '.program-card',
        '.event-card',
        '.news-card',
        '.gallery-item',
        '.about-grid',
        '.objectives-box',
        '.contact-info',
        '.form-card',
        '.donate-card',
        '.volunteer-card',
        '.cta-banner .container',
        '.mission-card'
    ].join(', ');

    const revealEls = document.querySelectorAll(revealSelectors);

    // Respect users who've asked for reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!revealEls.length || prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('reveal-visible'));
        return;
    }

    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
})();
