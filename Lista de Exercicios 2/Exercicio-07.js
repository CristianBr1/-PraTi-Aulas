const ordenarPorPreco = (produtos) => {
    return produtos
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome); 
}

const produtos = [
    { nome: "Celular", preco: 1500 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 100 },
    { nome: "Monitor", preco: 900 }
];

console.log(ordenarPorPreco(produtos));