function calcularNota() {
  var nota1 = parseInt(document.getElementById("nota1").value)
  var nota2 = parseInt(document.getElementById("nota2").value)
  var nota3 = parseInt(document.getElementById("nota3").value)
  var nota4 = parseInt(document.getElementById("nota4").value)
  var Resultado = document.getElementById("resultado"); Resultado.innerHTML = ""
  
  var resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  
  if(resultado >= 7){
    Resultado.innerHTML = "Aluno APROVADO! Média: " + resultado;
    document.getElementById("resultado").style.color = '#15ff00';
  }else{
    Resultado.innerHTML = "Aluno REPROVADO! Boa sorte na próxima! Média atingida: " + resultado;
    document.getElementById("resultado").style.color = '#fc0303';
  }
}