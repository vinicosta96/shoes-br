
    // Exemplo de função para calcular itens no carrinho
    document.getElementById('calcularCarrinho').addEventListener('click', function() {
        // Simulando o cálculo de itens no carrinho
        // Substitua pelo seu código de lógica do carrinho
        let quantidadeItens = 5; // Supondo que você tenha 5 itens no carrinho
        alert('Você tem ' + quantidadeItens + ' itens no carrinho.');
    });





    
function calculateTotal(element) {
    // Selecionar o card correspondente
    const card = element.closest('.card');

    // Pegar o preço base do produto do atributo data-price
    const price = parseFloat(card.getAttribute('data-price'));

    // Pegar a quantidade inserida pelo usuário
    const quantity = parseInt(element.value);

    // Calcular o total
    const total = (price * quantity).toFixed(2);

    // Atualizar o elemento com o total calculado
    const totalPriceElement = card.querySelector('.total-price');
    totalPriceElement.textContent = `Total: R$ ${total}`;
}

    // script.js

// Exemplo de produtos que podem estar no carrinho
let produtos = [
    { nome: "Produto 1", preco: 50.00, quantidade: 2 },
    { nome: "Produto 2", preco: 30.00, quantidade: 1 },
];

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const tabelaCarrinho = document.getElementById('tabelaCarrinho');
    tabelaCarrinho.innerHTML = ''; // Limpa a tabela

    let totalCarrinho = 0; // Reseta o total

    produtos.forEach((produto, index) => {
        const totalProduto = produto.preco * produto.quantidade;
        totalCarrinho += totalProduto; // Soma ao total do carrinho

        // Adiciona a linha na tabela
        tabelaCarrinho.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${totalProduto.toFixed(2)}</td>
                <td><button onclick="removerProduto(${index})">Remover</button></td>
            </tr>
        `;
    });

    // Atualiza o total no carrinho
    document.getElementById('totalCarrinho').innerText = `R$ ${totalCarrinho.toFixed(2)}`;
}

// Função para remover um produto do carrinho
function removerProduto(index) {
    produtos.splice(index, 1); // Remove o produto do array
    atualizarCarrinho(); // Atualiza o carrinho
}

// Função para esvaziar o carrinho
document.getElementById('esvaziarCarrinho').addEventListener('click', () => {
    produtos = []; // Limpa o array de produtos
    atualizarCarrinho(); // Atualiza o carrinho
});

// Função para finalizar a compra (pode ser ajustada conforme necessário)
document.getElementById('finalizarCompra').addEventListener('click', () => {
    alert("Compra finalizada! Obrigado!");
});

// Inicializa o carrinho na página
atualizarCarrinho();

