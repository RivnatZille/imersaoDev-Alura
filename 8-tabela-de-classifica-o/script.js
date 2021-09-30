//         chave: valor     chave: valor
var carlos = {nome:"Carlos", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://avatarfiles.alphacoders.com/566/56.jpg"}
var janaina = {nome:"Janaina", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://avatarfiles.alphacoders.com/624/624.jpg"}
var joao = {nome:"João", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://avatarfiles.alphacoders.com/133/1335.jpg"}
// objeto avatar criado para conter a imagem de avatar/perfil do jogador

var totalPartidas = 0
var totalVitorias = 0
var totalDerrotas = 0

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas
  return pontos;
}

carlos.pontos = calculaPontos(carlos)
janaina.pontos = calculaPontos(janaina)
joao.pontos = calculaPontos(joao)

var jogadores = [carlos, janaina, joao]

function exibeJogadores(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "<br><img src=" + jogadores[i].avatar + " class='avatares'></td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"   
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
  contadorDeTotais()
}

exibeJogadores(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador)
  totalPartidas++;
  totalVitorias++;
  exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
  }
  totalPartidas++;
  exibeJogadores(jogadores)
} // mudança na função adicionarEmpate() = toda vez que a função for chamada, independente do jogador, será adicionado 1 empate a todos os outros (usando a estrutura for) 

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador)
  totalPartidas++;
  totalDerrotas++;
  exibeJogadores(jogadores)  
}

function adicionarJogador() {
  var nomeNovoJogador = document.getElementById("nomeNovoJogador").value
  var avatarNovoJogador = document.getElementById("avatarNovoJogador").value
  var msgAdicionado = document.getElementById("msgAdicionado")
  jogadores.push({nome: nomeNovoJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: avatarNovoJogador})
  document.getElementById("nomeNovoJogador").value = ""
  document.getElementById("avatarNovoJogador").value = ""
  msgAdicionado.innerHTML = "Jogador adicionado!"
  exibeJogadores(jogadores)
} // função para adicionar um novo jogador

function zerarPontos(i) {
  var msgZerado = document.getElementById("msgZerado")
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  totalPartidas = 0
  totalVitorias = 0
  totalDerrotas = 0
  exibeJogadores(jogadores)
  contadorDeTotais()
  msgZerado.innerHTML = "Pontuação Zerada!"
} // função para zerar a pontuação de todos os jogadores

function contadorDeTotais() {
  var elementoTotalPartidas = document.getElementById("totalPartidas")
  var elementoValidacao = document.getElementById("validacaoVitoriasDerrotas")
  elementoTotalPartidas.innerHTML = "Total de Partidas: " + totalPartidas + "<br>Total de Vitórias: " + totalVitorias + "<br>Total de Derrotas: " + totalDerrotas
  if (totalVitorias > totalDerrotas) {
    elementoValidacao.innerHTML = "O número Total de Vitórias é superior ao Total de Derrotas. Faça uma revisão dos dados."
   } else if (totalDerrotas > totalVitorias) {
    elementoValidacao.innerHTML = "O número Total de Derrotas é superior ao Total de Vitórias. Faça uma revisão dos dados."
   } else if (totalDerrotas == totalVitorias) {
     elementoValidacao.innerHTML = ""
  }  
} // função para mostrar o Total de Partidas, Vitórias e Derrotas