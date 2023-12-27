function comprar() {
    let quantidade = document.querySelector('#qtd').value;
    let ingresso = document.querySelector('#tipo-ingresso').value;
    let quantidadeDisponivel = parseInt(document.querySelector(`#qtd-${ingresso}`).textContent);
    const quantidadeDisponivelTexto = document.querySelector(`#qtd-${ingresso}`);

    if (quantidade <= quantidadeDisponivel) {
        quantidadeDisponivel -= quantidade;

        quantidadeDisponivelTexto.innerHTML = quantidadeDisponivel;
    } else {
        alert(`Quantidade inválida. A quantidade disponível para ${ingresso} é de ${quantidadeDisponivel}.`);
    }
}
