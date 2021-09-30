// var valor = parseFloat(document.getElementById("valor").value)
var valorConvertidoCampo = document.getElementById("valorConvertidoCampo")

function converter() {
  if (document.getElementById("moedaDolares").checked) {
    converterDolares()  
  } else if (document.getElementById("moedaEuros").checked) {
    converterEuros()
  } else if (document.getElementById("moedaLibras").checked) {
    converterLibras()
  } else if (document.getElementById("moedaPesos").checked) {
    converterPesos()
  } else if (document.getElementById("moedaBitcoins").checked) {
    converterBitcoins()
  } else {
    var mensagemValorConvertido = "Erro: Selecione uma Moeda e insira um Valor para continuar."
    valorConvertidoCampo.innerHTML = mensagemValorConvertido
  }
}

function converterDolares() {
  var valor = parseFloat(document.getElementById("valor").value)
  var valorConvertido = valor * 5
  var mensagemValorConvertido = valor + " Dólares é igual a R$" + valorConvertido
  valorConvertidoCampo.innerHTML = mensagemValorConvertido
}

function converterEuros() {
  var valor = parseFloat(document.getElementById("valor").value)
  var valorConvertido = valor * 6
  var mensagemValorConvertido = valor + " Euros é igual a R$" + valorConvertido
  valorConvertidoCampo.innerHTML = mensagemValorConvertido
}

function converterLibras() {
  var valor = parseFloat(document.getElementById("valor").value)
  var valorConvertido = valor * 7
  var mensagemValorConvertido = valor + " Libras é igual a R$" + valorConvertido
  valorConvertidoCampo.innerHTML = mensagemValorConvertido
}

function converterPesos() {
  var valor = parseFloat(document.getElementById("valor").value)
  var valorConvertido = valor * 0.05
  var mensagemValorConvertido = valor + " Pesos Argentinos é igual a R$" + valorConvertido
  valorConvertidoCampo.innerHTML = mensagemValorConvertido
}

function converterBitcoins() {
  var valor = parseFloat(document.getElementById("valor").value)
  var valorConvertido = valor * 250000
  var mensagemValorConvertido = valor + " Bitcoins é igual a R$" + valorConvertido
  valorConvertidoCampo.innerHTML = mensagemValorConvertido
}