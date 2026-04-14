// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ Template FinanMemes carregado com sucesso! Pronto para editar.', 'color:#00ff88; font-size:16px; font-weight:bold');

    // Hamburger menu mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        
        // Animação do hamburger
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('show')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Efeito de scroll suave nos links (caso use âncoras no futuro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Console divertido para você saber que o JS está rodando
    console.log('🚀 Site da Turma 3º DS pronto. Só trocar as imagens e textos!');
});