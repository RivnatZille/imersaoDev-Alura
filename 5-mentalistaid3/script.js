var numeroSecreto = parseInt(Math.random() * 11);
var elementoBotao = document.getElementById("botao");
let tentativas = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O número secreto é maior que " +
      chute +
      ". Tente novamente!";
    tentativas = tentativas + 1;
    console.log(tentativas);
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O número secreto é menor que " +
      chute +
      ". Tente novamente!";
    tentativas = tentativas + 1;
    console.log(tentativas);
  }
  if (tentativas == 3) {
    elementoResultado.innerHTML =
      "Você esgotou todas as suas tentativas! O número secreto era: " +
      numeroSecreto +
      ". Recarregue a página para tentar novamente!";
    elementoBotao.remove();
  }
}