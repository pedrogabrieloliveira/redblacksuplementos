// CARROSSEL 

function iniciarCarrossel() {
    const container = document.querySelector('#carrosselLancamentos');
    const btnLeft = document.querySelector('.carrossel-btn.left');
    const btnRight = document.querySelector('.carrossel-btn.right');

    if (!container || !btnLeft || !btnRight) return;

    let scrollAmount = 0;
    const scrollStep = 300;

    btnLeft.addEventListener('click', () => {
        container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
}

// Ativar animações simples ao carregar
function animarElementos() {
    document.querySelectorAll('.card-produto, .grid-categorias a').forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = '0.5s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100 * i);
    });
}

window.addEventListener('load', () => {
    iniciarCarrossel();
    animarElementos();
});