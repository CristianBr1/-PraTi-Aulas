// Converte um array de pares [ [chave, valor], ... ] em um objeto
const paresParaObjeto = (pares) => {
    return Object.fromEntries(pares);
}

// Converte um objeto em um array de pares [ [chave, valor], ... ]
const objetoParaPares = (obj) => {
    return Object.entries(obj);
}

const pares = [
    ["nome", "Alice"],
    ["idade", 25],
    ["cidade", "São Paulo"]
];

const objeto = { nome: "Bob", idade: 30, cidade: "Rio de Janeiro" };

console.log(paresParaObjeto(pares)); 
console.log(objetoParaPares(objeto)); 