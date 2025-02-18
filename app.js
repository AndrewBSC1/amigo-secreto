//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// CAPTURA ELEMENTOS
let amigo = document.getElementById("nome-amigo"); //input
let listaAmigos = document.getElementById("lista-amigos"); // paragrafo
let listaSorteio = document.getElementById("lista-sorteio"); // paragrafo

// LISTA DE ARRAYS
let amigosIncluidos = [];
let amigosSorteados = [];

// Contador de tentativa de embaralhamento
let contador = 1;

// FUNCAO ADICIONAR AMIGO
function adicionar() {
  // Adiciona participante na lista de amigos desde que o campo não esteja em vazio ou já adicionado
  const amigo = elemAmigo.value;
  if (amigo && !arrAmigosIncluidos.includes(amigo.toUpperCase())) {
    arrAmigosIncluidos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = arrAmigosIncluidos.join(", ");
    elemAmigo.value = "";
  }
}

function sortear() {
  // Limpa lista de sorteios
  listaSorteio.innerHTML = "";

  const sorteioBemSucedido = realizaSorteio();

  if (sorteioBemSucedido) {
    amigosIncluidos.forEach((item, i) => {
      elemListaSorteio.innerHTML += `${item} --> ${arrAmigosSorteados[i]}<br>`;
    });
    console.log("Amigos sorteados", amigosSorteados);
    contador = 1;
  } else {
    contador += 1;
    sortear();
  }
}

// FUNCAO PARA GERAR LISTA DE AMIGO E SEU AMIGO SECRETO
function realizaSorteio() {
  amigosSorteados.length = 0;

  const amigosEmbaralhados = amigosIncluidos.slice();
  embaralhaAmigos(amigosEmbaralhados);
  console.log(`Embaralhamento n: ${contador}`, amigosEmbaralhados);

  // Verifica se o amigo tirou ele mesmo e retorna o status falso ou verdadeiro
  for (let i = 0; i < amigosIncluidos.length; i++) {
    if (amigosEmbaralhados[i] == amigosIncluidos[i]) {
      return false;
    }
    // Se não tiver erro, adiciona na lista de sorteados
    amigosSorteados.push(amigosEmbaralhados[i]);
  }
  return true;
}

// FUNCAO PARA EMBARALHAR LISTA DE AMIGOS
function embaralhaAmigos(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// FUNCAO DE REINICIAR
function reiniciar() {
  amigosIncluidos.length = 0;
  listaSorteio.innerHTML = "";
  amigo.value = "";
  listaAmigos.textContent = "";
}