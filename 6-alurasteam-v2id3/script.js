var listaNomes = ["Grim Dawn", "The Elder Scrolls Online", "Fallout: New Vegas", "S.T.A.L.K.E.R. - Call of Pripyat"]

var listaJogos = [
  "https://cdn.akamai.steamstatic.com/steam/apps/219990/header.jpg?t=1614363857",
  "https://cdn.akamai.steamstatic.com/steam/apps/306130/header.jpg?t=1630007116",
  "https://cdn.akamai.steamstatic.com/steam/apps/22380/header.jpg?t=1586905021",
  "https://cdn.akamai.steamstatic.com/steam/apps/41700/header.jpg?t=1624531750"
];
var listaLinks = [
  "https://store.steampowered.com/app/219990/Grim_Dawn/",
  "https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/",
  "https://store.steampowered.com/app/22380/Fallout_New_Vegas/",
  "https://store.steampowered.com/app/41700/STALKER_Call_of_Pripyat/"
];

var novaAba = "blank";
var elementoJogos = document.getElementById("jogos")
var elementoNovosJogos = document.getElementById("novosJogos")
var i = 0

for (i; i < listaJogos.length; i++) {
  elementoJogos.innerHTML += "<h3>" + listaNomes[i] + "</h3><a href=" + listaLinks[i] + " target=_" + novaAba +"> <img src=" + listaJogos[i] + "></a>";
  }

function novoJogo() {
  var campoNome = document.getElementById("campoNome").value
  var campoJogo = document.getElementById("campoJogo").value
  var campoLink = document.getElementById("campoLink").value
  var conf = document.getElementById("conf")
  if (listaLinks.includes (campoLink)) {
    var menConf = "Link Inválido! Esse jogo já consta na lista!"
    conf.innerHTML = menConf;
  } else if (campoNome == "" || campoJogo == "" || campoLink == "") {
    var menConf = "Insira as informações necessárias nos campos!"
    conf.innerHTML = menConf;
  } else {
    var menConf = "Jogo adicionado!"
    conf.innerHTML = menConf;
    listaNomes.push(campoNome)
    listaJogos.push(campoJogo)
    listaLinks.push(campoLink)
    document.getElementById("campoNome").value = ""
    document.getElementById("campoJogo").value = ""
    document.getElementById("campoLink").value = ""
    exibirLista()
  }  
}

function removerJogo() {
  var campoNomeRemover = document.getElementById("campoNomeRemover").value
  var menConfRemover = document.getElementById("confRemover")
  if (listaNomes.includes(campoNomeRemover)) {
    var menConfRemover = "Jogo removido!"
    confRemover.innerHTML = menConfRemover
    var posicao = listaNomes.findIndex(checkNome) // variavel para puxar a função checkNome
    listaNomes.splice(posicao, 1)
    listaLinks.splice(posicao, 1)
    listaJogos.splice(posicao, 1)
    document.getElementById("campoNomeRemover").value = ""
    exibirLista()
  } else if (campoNomeRemover == "" || !listaNomes.includes(campoNomeRemover)) {
    var menConfRemover = "Insira um nome válido!"
    confRemover.innerHTML = menConfRemover
  } 
}

function exibirLista() {
    elementoNovosJogos.innerHTML = ""
    var i = 4
    for (i; i < listaJogos.length; i++) {  
    elementoNovosJogos.innerHTML += "<h3>" + listaNomes[i] + "</h3><a href=" + listaLinks[i] + " target=_" + novaAba +"> <img src=" + listaJogos[i] + "></a>"
    }
}

function checkNome(nome) { // função que verifica o index do nome do jogo dentro da Array
  var remover = document.getElementById("campoNomeRemover").value
  return nome === remover;
}