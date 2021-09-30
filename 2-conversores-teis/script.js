function converterGraus() {
  var graus = parseInt(document.getElementById("graus").value)
  var fah = document.getElementById("fah"); fah.innerHTML = ""
  var calcfah = ((graus * 1.8) + 32).toFixed(0)
  fah.innerHTML = graus + "C é equivalente a " + calcfah + " F";
}

function converterDistancia() {
  var kms = parseInt(document.getElementById("kms").value)
  var mil = document.getElementById("mil"); mil.innerHTML = ""
  var calcmil = (kms * 0.621371).toFixed(2)
  mil.innerHTML = kms + "KMs é equivalente a " + calcmil + " Milhas";
}