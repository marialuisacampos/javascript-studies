let submit = document.querySelector(".submit");

function counting() {
  let initialNumber = document.querySelector(".initialNumber");
  let endNumber = document.querySelector(".endNumber");
  let stepsNumber = document.querySelector(".stepsNumber");
  if (
    initialNumber.value == 0 ||
    endNumber.value == 0 ||
    stepsNumber.value == 0
  ) {
    window.alert("Estão faltando dados! Tente novamente.");
  } else {
    let i = Number(initialNumber.value);
    let e = Number(endNumber.value);
    let s = Number(stepsNumber.value);
    let countingText = document.querySelector(".countingText");
    countingText.innerHTML = "Contando: ";
    if (s <= 0) {
      window.alert(
        "Passo inválido! Iremos considerar o passo 1 para essa contagem."
      );
    }
    if (i < e) {
      for (let c = i; c <= e; c += s) {
        countingText.innerHTML += `${c} \u{27A1} `;
      }
    } else {
      for (let c = i; c >= e; c -= s) {
        countingText.innerHTML += `${c} \u{27A1} `;
      }
    }
    countingText.innerHTML += `\u{1F3C1}`;
  }
}

submit.addEventListener("click", counting);
