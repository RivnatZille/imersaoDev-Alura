var carta1 = {
  nome: "1 - Soldado",  
  imagem:"https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/7/7b/Soldier_Main.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 10,
    Magia: 3
   }, 
};

var carta2 = {
  nome: "2 - Demolicionista",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/8/8e/Demo_Main.jpg",
  atributos: {
    Ataque: 10,
    Defesa: 3,
    Magia: 6
  },
};

var carta3 = {
  nome: "3 - Ocultista",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/0/02/Occultist_Main.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 5,
    Magia: 9
  },
};

var carta4 = {
  nome: "4 - Lâmina Noturna",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/9/98/Nightblade.jpg",
  atributos: {
    Ataque: 10,
    Defesa: 3,
    Magia: 5
  },
};

var carta5 = {
  nome: "5 - Arcanista",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/4/4d/The_Acranist.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 3,
    Magia: 10
  },
};

var carta6 = {
  nome: "6 - Xamã",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/d/d1/Shaman.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 6,
    Magia: 6
  },
};

var carta7 = {
  nome: "7 - Inquisidor",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/6/6a/Inquisitor_Main.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 4,
    Magia: 7
  },
};

var carta8 = {
  nome: "8 - Necromante",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/1/19/Necro_Main.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 5,
    Magia: 9
  },
};

var carta9 = {
  nome: "9 - Guardião do Juramento",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/3/36/Oathkeeper_Main.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 4
  },
};

var carta10 = {
  nome: "10 - Loghorrean",
  imagem: "https://static.wikia.nocookie.net/grimdawn_gamepedia_en/images/7/7a/Loghorrean.jpg",
  atributos: {
    Ataque: 10,
    Defesa: 10,
    Magia: 8
  },
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]
var cartasVencidasJogador = []
var cartasVencidasMaquina = []
var cartaMaquina
var cartaJogador
var elementoContagemJogador = document.getElementById("contagemJogador")
var elementoContagemMaquina = document.getElementById("contagemMaquina")
var sorteioRandom = 10

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * sorteioRandom)
  cartaMaquina = cartas[numeroCartaMaquina]
  var numeroCartaJogador = parseInt(Math.random() * sorteioRandom)
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * sorteioRandom)   
  }
  cartaJogador = cartas[numeroCartaJogador]
  
  if (cartas.length == 0) {
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = true
      if (cartasVencidasJogador.length > cartasVencidasMaquina.length) {
        htmlResultado = "<p class='resultado-final'>Parabéns! Você venceu o jogo!</p>"
      } else if (cartasVencidasMaquina.length > cartasVencidasJogador.length) {
        htmlResultado = "<p class='resultado-final'>Que pena! Você perdeu o jogo!</p>"
      }
  }
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirCartaJogador()
}

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo")
  var opcoesErro = document.getElementById("opcoesErro")
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value   
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  console.log(cartaJogador)
  console.log(cartaMaquina)
  
  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Parabéns! Você venceu essa partida!</p>"
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Você perdeu essa partida!</p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Empate!</p>"
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina () {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"  
}