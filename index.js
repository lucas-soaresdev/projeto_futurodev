// Função para o menu mobile

function abrir(){
    let Main = document.querySelector('main')
    let Footer = document.querySelector('footer')
    let menuOculto = document.getElementById('menu-oculto')
    let menuMobile = document.getElementById('menu-items')

    if(menuMobile.classList.contains('aberto')){
        menuMobile.classList.remove('aberto')
        menuOculto.classList.remove('menu-animacao')
        Main.classList.remove('esconder')
        Footer.classList.remove('esconder')

    }
    else{
        menuMobile.classList.add('aberto')
        menuOculto.classList.add('menu-animacao')
        Main.classList.add('esconder')
        Footer.classList.add('esconder')
    }
}



const menu = document.querySelector('header');

function ativarScroll(){
  menu.classList.toggle('ativo', scrollY > 0)
}

window.addEventListener('scroll', ativarScroll)