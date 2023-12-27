function comprar() {
    let quantidade = document.querySelector('#qtd').value;
    let ingresso = document.querySelector('#tipo-ingresso').value;
    let quantidadeDisponivel = parseInt(document.querySelector(`#qtd-${ingresso}`).textContent);
    const quantidadeDisponivelTexto = document.querySelector(`#qtd-${ingresso}`);

    if (quantidade <= quantidadeDisponivel && quantidade > 0) {
        quantidadeDisponivel -= quantidade;

        quantidadeDisponivelTexto.innerHTML = quantidadeDisponivel;
    } else if (quantidade > quantidadeDisponivel) {
        alert(`Quantidade inválida. A quantidade disponível para ${ingresso} é de ${quantidadeDisponivel}.`);
    } else {
        alert('A quantidade não pode ser menor do que 1.')
    }
}
