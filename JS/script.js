const links = Array.from(document.querySelectorAll('nav a'));

const animacaoLink = (item)=>{
  const href = item.href;
  const url = document.location.href;

  if(url.includes(href)){
    item.classList.add('ativo');
  }
}

links.forEach(animacaoLink);

const parametros = new URLSearchParams(location.search);

const ativarProduto = (parametro) =>{
  const elemento = document.getElementById(parametro) 
  elemento.checked = true
}

parametros.forEach(ativarProduto);


const bicicletas = Array.from(document.querySelectorAll('.bicicleta-imagens img'));
const galeriaContainer = document.querySelector('.bicicleta-imagens');

const trocarImg = (event)=>{
  const imagem = event.currentTarget;
  galeriaContainer.prepend(imagem);
}

const galeria = (imagem)=>{
  imagem.addEventListener('click',trocarImg);
}

bicicletas.forEach(galeria);

if(window.SimpleAnime){
  new SimpleAnime()
}
