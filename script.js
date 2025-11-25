// Obtém o elemento span onde a contagem será exibida
const contadorElement = document.getElementById('visitas');

// Tenta obter a contagem armazenada no localStorage
let contagem = localStorage.getItem('contadorDeVisitas');

// Se não houver contagem armazenada, começa com 0
if (contagem === null) {
    contagem = 0;
} else {
    // Caso contrário, converte o valor de string para número
    contagem = parseInt(contagem, 10);
}

// Incrementa a contagem
contagem++;

// Atualiza o valor no localStorage
localStorage.setItem('contadorDeVisitas', contagem);

// Atualiza o texto no elemento HTML
contadorElement.textContent = contagem;