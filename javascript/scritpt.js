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

let nextBtn = document.querySelector('.next') //| pega o botão
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider') //| pega a div que tem a thumb e as informações
let sliderList = slider.querySelector('.slider .list') //| pega a parte das informações
let thumbnail = document.querySelector('.slider .thumbnail') //| pega thumb
let thumbnailItems = thumbnail.querySelectorAll('.item') //| pegas os itens da thumb

thumbnail.appendChild(thumbnailItems[0])//| coloca o primeiro item da thumbnail dentro da thumb

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')//| pega os intens da div informações
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')//| pega os itens da thumb
    
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

/*sliderList.prepend(sliderItems[sliderItems.length - 1]):
sliderList parece ser um elemento HTML (provavelmente um <ul> ou <div> que contém itens de slider).
sliderItems parece ser uma coleção de elementos que representam cada slide dentro do slider.
sliderItems[sliderItems.length - 1] seleciona o último item da coleção sliderItems.
.prepend() é um método que insere o elemento especificado como o primeiro filho do elemento sliderList. Portanto, esta linha insere o último slide como o primeiro filho de sliderList.*/

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


//! javascript para mudar de pesquisa

// Seleciona o input de busca
const searchInput = document.getElementById('search');

// Quando o usuário interagir com o input, esta função será executada
searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value); // Armazena e formata o valor do input

    const items = document.querySelectorAll('.navegacao .cartoes'); // Seleciona todos os itens, dentro da ul pega todos os li
    const noResults = document.getElementById('no_results'); // Seleciona o elemento da mensagem "nenhum resultado"
    let hasResults = false; // Indica se há resultados correspondentes

    // Se existir valor no input
    if (value !== '') {
        items.forEach(item => {
            const itemTitle = item.querySelector('.item-title').textContent; // Obtém o texto do título do item
            const itemDescription = item.querySelector('.item-description').textContent; // Obtém o texto da descrição do item

            // Se o valor digitado está contido nesse texto
            if (formatString(itemTitle).indexOf(value) !== -1
                || formatString(itemDescription).indexOf(value) !== -1
            ) {
                // Exibe o item
                item.style.display = 'flex';

                // Indica que existem resultados
                hasResults = true;
            } else {
                // Oculta o item
                item.style.display = 'none';
            }
        });

        // Exibe ou oculta a mensagem "nenhum resultado"
        if (hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }

    } else {
        // Sempre exibe todos os itens quando o input está vazio
        items.forEach(item => item.style.display = 'flex');
        noResults.style.display = 'none'; // Oculta a mensagem "nenhum resultado"
    }
});

// Função para formatar strings: remove espaços em branco, transforma em lowercase e remove acentos
function formatString(value) {
    return value
        .trim() // Remove espaços em branco
        .toLowerCase() // Transforma em lowercase
        .normalize('NFD') // Normaliza para separar os acentos
        .replace(/[\u0300-\u036f]/g, ''); // Remove os acentos
}


//! javascript para ativar o filtro

document.querySelectorAll('.classe').forEach(item => {
  item.addEventListener('click', function() {

    // Pega o valor do item clicado
    const valorLi = this.textContent.trim();

    // Seleciona todos os cartões
    const cartoes = document.querySelectorAll('.cartoes');
    
    if (valorLi.toLowerCase() !== "todos") {
      cartoes.forEach(cartao => {
        const itemDescription = cartao.querySelector('.item-description').textContent.trim();

        // Formata as strings para comparação
        const formattedValorLi = formatString(valorLi);
        const formattedItemDescription = formatString(itemDescription);

        // Verifica se a descrição do cartão contém o valor da li clicada
        if (formattedItemDescription.indexOf(formattedValorLi) !== -1) {
          // Exibe o cartão
          cartao.style.display = 'flex';
        } else {
          // Oculta o cartão
          cartao.style.display = 'none';
        }
      });
    } else {
      // Se o valor for 'todos', exibe todos os cartões
      cartoes.forEach(cartao => cartao.style.display = 'flex');
    }
  });
});

// Função para formatar strings: remove espaços em branco, transforma em lowercase e remove acentos
function formatString(value) {
  return value
    .trim() // Remove espaços em branco
    .toLowerCase() // Transforma em lowercase
    .normalize('NFD') // Normaliza para separar os acentos
    .replace(/[\u0300-\u036f]/g, ''); // Remove os acentos
}


//! javascript usado apenas no mobile


const tent = document.querySelector('.contencao');
const tenta = document.querySelector('.tentativa');

tenta.addEventListener('click', () => {
    if (tent.style.display === 'none') {
        tent.style.display = 'flex';
    } else {
        tent.style.display = 'none';
    }
});

