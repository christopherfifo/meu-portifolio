//! javascript do saidbar

//todo: menu

const menuItem = document.querySelectorAll('.item-menu');

//? Evento: esta removendo a classe do item que não clicou, e esta adicionando a calsse a um item que clicou

function selectLink() {
  menuItem.forEach((item) => item.classList.remove('ativo'));
  this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));


//todo: expandir menu

const btnExp = document.querySelector('#btn-exp');
const menuSad = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
  menuSad.classList.toggle('expandir');
});

//! javascript do troca de tema


                              //todo : mudar o modo de tema e  mudar video
const video = document.querySelector("#video");
const mode = document.getElementById("mode_icon");
const body = document.querySelector("body");

mode.addEventListener("click", () => {
  

  if (mode.classList.contains("fa-moon")) {

    mode.classList.toggle("fa-moon");
    mode.classList.toggle("fa-sun");

    body.classList.toggle("dark");

    video.setAttribute(
      "src", "https://www.youtube.com/embed/4xDzrJKXOOY?autoplay=1&si=N7EwsVwPv_3rkGUw");


      
    return; 
  }

  mode.classList.toggle("fa-moon");
  mode.classList.toggle("fa-sun");

  body.classList.toggle("dark");

  video.setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&si=Wmw2lqvlOxuWPs5S");
});



//! javascript do header

//todo : muadar o header

window.addEventListener("scroll", function (){ 

    const header = document.querySelector("#header")
    header.classList.toggle("rolagem", window.scrollY > 0) //| se o scroll for maior que 0 ele adiciona a classe rolagem, toogle adiciona a classe se não tiver e remove se tiver
  
})