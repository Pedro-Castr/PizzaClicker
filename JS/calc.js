let pontos = 0;

document.getElementById('asteroide').addEventListener('click', function() {
    pontos++;
    document.getElementById('pontuacao').innerText = 'Pontos: ' + pontos;

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
