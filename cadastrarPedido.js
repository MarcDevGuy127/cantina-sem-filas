function fornecerCardapio() {
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        
        console.log(element + " item");
    }
}

fornecerCardapio();

function cadastrarPedido() {
    const produto = "Croissant Chocolate";
    const quantidade = 2;
    const status = "preparando";
    const preco = 25;
    const valorTotal = quantidade * preco;

    console.log("Pedido cadastrado com sucesso!");
    console.log("Produto:", produto);
    console.log("Quantidade:", quantidade);
    console.log("Total: R$ " + valorTotal);
}



cadastrarPedido();
