function converterFahrenheit() {
  var grausCelsius = parseFloat(document.getElementById("graus").value)
  var grausFahrenheit = (grausCelsius * 1.8) + 32
  var localResultado = document.getElementById("resultado")
  var textoResultado = grausCelsius + "C em Fahrenheit é " + grausFahrenheit + "F"
  localResultado.innerHTML = textoResultado
}

function converterKelvin() {
  var grausCelsius = parseFloat(document.getElementById("graus").value)
  var grausKelvin = grausCelsius + 273.15
  var localResultado = document.getElementById("resultado")
  var textoResultado = grausCelsius + "C em Kelvin é " + grausKelvin + "K"
  localResultado.innerHTML = textoResultado
}