const text = document.querySelector("p");
const img = document.querySelector("img");
const title = document.querySelector(".header");

function load() {
  var data = new Date();
  var hora = data.getHours();
  if (hora > 0 && hora < 12) {
    img.src = "/imgs/manha1.png";
    text.innerHTML = "Agora são " + hora + " horas";
    title.innerHTML = "Bom dia!";
    document.body.style.backgroundColor = "#F0E68C";
  } else if (hora >= 12 && hora < 18) {
    img.src = "/imgs/tarde1.png";
    text.innerHTML = "Agora são " + hora + " horas";
    title.innerHTML = "Boa tarde!";
    document.body.style.backgroundColor = "#FFA500";
  } else {
    img.src = "/imgs/noite1.png";
    text.innerHTML = "Agora são " + hora + " horas";
    title.innerHTML = "Boa noite!";
    document.body.style.backgroundColor = "#B22222";
  }
}

window.document.addEventListener("load", load());
