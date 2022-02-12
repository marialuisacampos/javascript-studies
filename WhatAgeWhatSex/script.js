const data = new Date();
const anoAtual = data.getFullYear();
const anoNasc = document.getElementById("year");
const sex = document.getElementsByName("sex");
const text = document.querySelector(".text");

function check() {
  if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
    window.alert("ERRO! Verifique os dados informados e tente novamente!");
  } else {
    const idade = anoAtual - anoNasc.value;
    if (sex[0].checked) {
      if (idade < 18) {
        text.innerHTML = "Detectamos um menino com " + idade + " anos.";
      } else {
        text.innerHTML = "Detectamos um homem com " + idade + " anos.";
      }
    } else {
      if (idade < 18) {
        text.innerHTML = "Detectamos uma menina com " + idade + " anos.";
      } else {
        text.innerHTML = "Detectamos uma mulher com " + idade + " anos.";
      }
    }
  }
}

const send = document.getElementById("send");

send.addEventListener("click", check);
