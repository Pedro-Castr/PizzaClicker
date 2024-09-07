// Função para truncar com duas casas decimais
function truncarDuasCasasDecimais(num) {
    return Math.trunc(num * 100) / 100;
}

let pontos = 0;

document.getElementById('pizza').addEventListener('click', function() {
    pontos++;
    document.getElementById('pontuacao').innerText = 'Pontos: ' + truncarDuasCasasDecimais(pontos);

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
            let novoPreco = parseFloat(preco) + (parseFloat(preco) / 100);
            this.querySelector(".preco").textContent = truncarDuasCasasDecimais(novoPreco);

            // Atualiza a quantidade total de pontos depois da compra
            pontos -= preco
            document.getElementById('pontuacao').innerText = 'Pontos: ' + truncarDuasCasasDecimais(pontos);
        }
    })
})