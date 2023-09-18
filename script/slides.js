//SlideShow

const slider = document.querySelectorAll('.slider');
const voltar = document.getElementById('botaoVoltar');
const avancar = document.getElementById('botaoAvancar');

let slideAtual = 0;

function escondeSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlider() {
  slider[slideAtual].classList.add('on')
}

function proximoSlide() {
  escondeSlider()
  if(slideAtual === slider.length -1) {
    slideAtual = 0
  } else {
    slideAtual++
  }
  mostrarSlider()
}

function voltarSlide() {
  escondeSlider()
  if(slideAtual === 0) {
    slideAtual = slider.length -1
  } else {
    slideAtual--
  }
  mostrarSlider()
}

avancar.addEventListener('click', proximoSlide)
voltar.addEventListener('click', voltarSlide)
