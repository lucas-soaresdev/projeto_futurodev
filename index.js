// Função para o menu mobile

let Main = document.querySelector('main')
let Footer = document.querySelector('footer')
let menuOculto = document.getElementById('menu-oculto')
let menuMobile = document.getElementById('menu-items')


function abrir(){
        menuMobile.classList.toggle('aberto')
        menuOculto.classList.toggle('menu-animacao')
        Main.classList.toggle('esconder')
        Footer.classList.toggle('esconder')
}
////////////////////

const menu = document.querySelector('header');

function ativarScroll(){
  menu.classList.toggle('ativo', scrollY > 0)
}

window.addEventListener('scroll', ativarScroll)