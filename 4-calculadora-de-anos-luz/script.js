function converterAnos() {
  var anosLuz = parseInt(document.getElementById("anos").value)
  var kms = anosLuz * 9460800000000
  
  var localResultado = document.getElementById("resultado")
  var textoResultado = anosLuz + " Anos-Luz são equivalentes a " + kms + " KMs."
  localResultado.innerHTML = textoResultado
}