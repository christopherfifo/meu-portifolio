                              //todo : muadar o header

  window.addEventListener("scroll", function (){ 

    const header = document.querySelector("#header")
    header.classList.toggle("rolagem", window.scrollY > 0) //| se o scroll for maior que 0 ele adiciona a classe rolagem, toogle adiciona a classe se não tiver e remove se tiver
  
})

                              //todo : mudar o modo de tema e  mudar video
const video = document.querySelector("#video");
const mode = document.getElementById("mode_icon");
const array_modo = document.querySelectorAll(".tema");
const html = document.querySelector("html");

mode.addEventListener("click", () => {
  

  if (mode.classList.contains("fa-moon")) {

    mode.classList.toggle("fa-moon");
    mode.classList.toggle("fa-sun");

    html.classList.toggle("dark");

    video.setAttribute(
      "src", "https://www.youtube.com/embed/4xDzrJKXOOY?autoplay=1&si=N7EwsVwPv_3rkGUw");


      
    return; 
  }

  mode.classList.toggle("fa-moon");
  mode.classList.toggle("fa-sun");

  html.classList.toggle("dark");

  video.setAttribute("src", "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&si=Wmw2lqvlOxuWPs5S");
});







