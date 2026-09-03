function cadastrarPedido() {
    const produto = "Croissant Chocolate";
    const quantidade = 2;
    const preco = 25;

    const valorTtotal = quantidade * preco;

    console.log("Pedido cadastrado com sucesso!");
    console.log("Produto:", produto);
    console.log("Quantidade:", quantidade);
    console.log("Total: R$ " + total);
}

cadastrarPedido();