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
const array_tema = document.querySelectorAll(".tema");

mode.addEventListener("click", () => {
  

  if (mode.classList.contains("fa-moon")) {

    mode.classList.toggle("fa-moon");
    mode.classList.toggle("fa-sun");

    for(temaa  of array_tema){
      temaa.classList.toggle("dark");
    }

    video.setAttribute(
      "src", "https://www.youtube.com/embed/4xDzrJKXOOY?autoplay=1&si=N7EwsVwPv_3rkGUw");
      
    return; 
  }

  mode.classList.toggle("fa-moon");
  mode.classList.toggle("fa-sun");

  for(temaa  of array_tema){
    temaa.classList.toggle("dark");
  }

  video.setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&si=Wmw2lqvlOxuWPs5S");
});

//! javascript mudar input/label

//todo: muadar idioma

// const chk = document.getElementById("#chk");

// chk.addEventListener("change", () => {

// })

//! javascript do header

//todo : muadar o header

window.addEventListener("scroll", function (){ 

    const header = document.querySelector("#header")
    header.classList.toggle("rolagem", window.scrollY > 0) //| se o scroll for maior que 0 ele adiciona a classe rolagem, toogle adiciona a classe se não tiver e remove se tiver
  
})

//! javascript slider

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

//! javascript das abas

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.conteudo');
    contents.forEach(conteudo => conteudo.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);

//! javscript do menu dos projetos

const menuFiltro = document.querySelectorAll('.classe')

function selectLink() {
  menuFiltro.forEach((filtro) => filtro.classList.remove('presente'));
  this.classList.add('presente');
}

menuFiltro.forEach((filtro) => filtro.addEventListener('click', selectLink));

//! javscript de mudar o coração de vazio para cheio

const amor = document.querySelectorAll('.star')

for (color of amor) {
    color.addEventListener('click', funCor)
}

function funCor(event) {
    // Obtém o elemento clicado, quem disparou o evento
    const clickedElement = event.target;
    
    // Alterna as classes do elemento clicado
    clickedElement.classList.toggle('fa-solid')
    clickedElement.classList.toggle('fa-regular')
}

//! javascript para mudar a visibilidade do span
document.querySelectorAll('.visualizar').forEach(button => {
    button.addEventListener('click', function() {
        // Encontra a li parente mais próxima
        const li = this.closest('li');
        // Encontra a div com id "span" dentro dessa li
        const spanDiv = li.querySelector('.janela');
        // Adiciona a classe "span" a essa div
        spanDiv.classList.add('span');
    });
});

document.querySelectorAll('.p_fechar').forEach(closeSpan => {
    closeSpan.addEventListener('click', function() {
        // Encontra a div parente mais próxima com id "span"
        const spanDiv = this.closest('.janela');
        // Remove a classe "span" dessa div
        spanDiv.classList.remove('span');
    });
});


// mudei #span por janela e o #p_fechar por p_fechar


