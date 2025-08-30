let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const entradaElemento = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const btnVerificar = document.getElementById("verificar");
const btnReiniciar = document.getElementById("reiniciar");
const container = document.querySelector(".container");

// Evento do botão
btnVerificar.addEventListener("click", verificarNumero);

// Evento tecla Enter (funciona em qualquer lugar da página)
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && !btnVerificar.disabled) {
    verificarNumero();
  }
});

// Sobe a div quando teclado virtual aparece no celular
entradaElemento.addEventListener("focus", () => {
  if (window.innerWidth <= 480) {
    container.style.top = "-50px";
  }
});

entradaElemento.addEventListener("blur", () => {
  if (window.innerWidth <= 480) {
    container.style.top = "0";
  }
});

function verificarNumero() {
  const chute = parseInt(entradaElemento.value);

  // Validação
  if (isNaN(chute) || chute < 1 || chute > 100) {
    alert("Por favor, digite um número entre 1 e 100!");
    entradaElemento.value = "";
    entradaElemento.focus();
    return;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    resultado.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
    resultado.style.color = "green";
    fimDeJogo();
  } else if (chute < numeroSecreto) {
    mostrarMensagem("⬆️ Tente um número maior!", "red");
  } else {
    mostrarMensagem("⬇️ Tente um número menor!", "red");
  }

  entradaElemento.value = "";
  entradaElemento.focus();
}

function mostrarMensagem(msg, cor) {
  resultado.textContent = msg;
  resultado.style.color = cor;

  // animação
  resultado.classList.remove("animar");
  void resultado.offsetWidth; // força reflow
  resultado.classList.add("animar");
}

function fimDeJogo() {
  entradaElemento.disabled = true;
  btnVerificar.disabled = true;
  btnReiniciar.style.display = "inline-block";
}

btnReiniciar.addEventListener("click", () => {
  // Resetar jogo
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  entradaElemento.disabled = false;
  btnVerificar.disabled = false;
  entradaElemento.value = "";
  entradaElemento.focus();
  resultado.textContent = "";
  btnReiniciar.style.display = "none";
});
