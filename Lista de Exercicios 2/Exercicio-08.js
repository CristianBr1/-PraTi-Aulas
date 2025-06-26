const agruparVendasPorCliente = (vendas) => {
    return vendas.reduce((acumulador, venda) => {
        acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
        return acumulador;
    }, {});
}
const vendas = [
    { cliente: "Alice", total: 100 },
    { cliente: "Bob", total: 50 },
    { cliente: "Alice", total: 200 },
    { cliente: "Bob", total: 75 },
    { cliente: "Charlie", total: 300 }
];

console.log(agruparVendasPorCliente(vendas));