const btnMenu = document.getElementById('menu-icon');

function toggleMenu(){
    const nav = document.getElementById('menu-opcoes');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
