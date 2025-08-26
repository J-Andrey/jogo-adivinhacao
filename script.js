const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const entradaElemento = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const btnVerificar = document.getElementById("verificar");
const container = document.querySelector(".container");

// Evento do botão
btnVerificar.addEventListener("click", verificarNumero);

// Evento tecla Enter
entradaElemento.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        verificarNumero();
    }
});

// Sobe a div quando teclado virtual aparece no celular
entradaElemento.addEventListener("focus", () => {
    if (window.innerWidth <= 480) {
        container.style.top = "-100px";
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
        resultado.textContent = `🎉 Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`;
        resultado.style.color = "green";
    } else if (chute < numeroSecreto) {
        resultado.textContent = "⬆️ Tente um número maior!";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "⬇️ Tente um número menor!";
        resultado.style.color = "red";
    }

    entradaElemento.value = "";
    entradaElemento.focus();
}
