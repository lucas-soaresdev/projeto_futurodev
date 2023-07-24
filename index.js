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



const animationElements = document.querySelectorAll('.animation');

// Função para verificar a posição dos elementos em relação à janela de visualização
function checkPositions() {
  for (let i = 0; i < animationElements.length; i++) {
    const content = animationElements[i];
    const elementPosition = content.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      content.classList.add('fade-in');
    }
  }
}

// Função para verificar se o elemento está visível na janela de visualização
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe "fade-in" ao elemento quando estiver visível
function fadeInElement() {
  for (let i = 0; i < animationElements.length; i++) {
    const content = animationElements[i];
    if (isElementInViewport(content)) {
      content.classList.add('fade-in');
    }
  }
}


window.addEventListener('scroll', function() {
  checkPositions();
  fadeInElement();
});


window.addEventListener('load', function() {
  checkPositions();
  fadeInElement();
});
