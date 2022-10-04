const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const buttonCalcularIMC = document.querySelector(".submit");
const messageError = document.querySelector("body section");
const modalResultIMC = document.querySelector(".modal");
const main = document.querySelector("main");
const buttom = document.querySelector(".botão");
const resultado = document.querySelector(".resultado");
const fade = document.querySelector(".fade");

function calcularIMC() {
  let peso = inputPeso.value;
  let altura = inputAltura.value;
  // Calculo para Fazer o IMC
  let IMC = (peso / (altura / 100) ** 2).toFixed(2);

  // Verificação se o que foi digitado no campo são números, caso não, mostrar mensagem de erro
  if (isNaN(peso) || isNaN(altura) || peso === "" || altura === "") {
    messageError.classList.toggle("error");
    inputPeso.value = "";
    inputAltura.value = "";
    // Caso a verificação seja verdadeira, remover o modal do resultado e mensagem de erro depois de 2 segundos
    setTimeout(() => {
      messageError.classList.toggle("error");
      modalResultIMC.classList.toggle("invisible");
      fade.classList.toggle("invisible");
    }, 2000);
  }

  resultado.textContent = IMC;
}

/*Botão de calcular o IMC*/
buttonCalcularIMC.addEventListener("click", function (event) {
  event.preventDefault();
  calcularIMC();

  modalResultIMC.classList.toggle("invisible");
  fade.classList.toggle("invisible");
});

/*Botão de voltar ao formulário quando tiver o modal*/
buttom.addEventListener("click", () => {
  modalResultIMC.classList.toggle("invisible");
  fade.classList.toggle("invisible");
});
