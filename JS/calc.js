let pontos = 0;
let pontosPorSegundo = 0;

// Função para atualizar os pontos na tela
function atualizaPontos() {
    document.getElementById('pontuacao').innerText = 'Pizzas: ' + Math.trunc(pontos);
    document.getElementById("pps").innerText = "Pizzas por Segundo: " + pontosPorSegundo.toFixed(1);
}

document.getElementById('pizza').addEventListener('click', function() {
    pontos++;
    atualizaPontos()

    // Cria o elemento para mostrar o valor adicionado
    const pontosGanhos = document.createElement('div');
    pontosGanhos.innerText = '+1';
    pontosGanhos.className = 'pontos-ganhos';

    // Posiciona o texto na posição do clique
    pontosGanhos.style.left = `${event.clientX}px`;
    pontosGanhos.style.top = `${event.clientY}px`;

    // Adiciona o texto ao corpo do documento
    document.body.appendChild(pontosGanhos);

    // Remove o texto após a animação terminar
    setTimeout(() => {
        pontosGanhos.remove();
    }, 1000);
});

const upgradeItens = document.querySelectorAll(".upgrade-item");

// Adiciona um evento ouvinte a cada item
upgradeItens.forEach(item => {
    item.addEventListener("click", function() {
        // Pega as variáveis de cada item
        let quantidade = this.querySelector(".quant-item").textContent;
        let preco = this.querySelector(".preco").textContent;

        if (pontos >= preco) {
            // Atualiza a quantidade do item
            let quantidadeSoma = parseInt(quantidade) + 1;
            this.querySelector(".quant-item").textContent = quantidadeSoma;

            // Atualiza o preço do item
            let novoPreco = parseFloat(preco) * 1.2;
            this.querySelector(".preco").textContent = Math.trunc(novoPreco);

            // Atualiza a quantidade total de pontos depois da compra
            pontos -= preco
            document.getElementById('pontuacao').innerText = 'Pontos: ' + Math.trunc(pontos);
        }
    })
})

// Definindo a taxa de geração de pontos por item
const pontosPorItem = {
    'Massa Macia': 0.1,
    'Rolo de Pizza': 1
};

// Função para calcular a quantidade de pontos gerados por segundo
function calculaPPS() {
    pontosPorSegundo = 0; // Reseta o valor de pontos por segundo

    document.querySelectorAll('.upgrade-item').forEach(item => {
        const nomeItem = item.querySelector('.nome').textContent;
        const quantidade = parseInt(item.querySelector('.quant-item').textContent);

        // Adiciona à pontuação o total gerado por esse item (quantidade * taxa de geração)
        pontosPorSegundo += quantidade * (pontosPorItem[nomeItem] || 0);
    });

    return pontosPorSegundo;
}

// Função que incrementa os pontos a cada segundo
function incrementarPontos() {
    calculaPPS();
    pontos += pontosPorSegundo;
    atualizaPontos();  // Atualiza a exibição dos pontos
}

// Inicia o sistema de geração de pontos, incrementando a cada segundo
setInterval(incrementarPontos, 1000);

// Atualiza os pontos na tela ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    atualizarPontosNaTela();
})