const prompt = require('prompt-sync')();

let totaldeeleitores = Number(prompt('Digite o total de eleitores: '));
let votosbrancos = Number(prompt('Digite o total de votos em branco: '));
let votosnulos = Number(prompt('Digite o total de votos nulos: '));
let votosvalidos = Number(prompt('Digite o total de votos válidos: '));

const percentualVotosBrancos = (votosbrancos, totaldeeleitores) => {
    return (votosbrancos / totaldeeleitores) * 100;
};
const percentualVotosNulos = (votosnulos, totaldeeleitores) => {
    return (votosnulos / totaldeeleitores) * 100;
};
const percentualVotosValidos = (votosvalidos, totaldeeleitores) => {
    return (votosvalidos / totaldeeleitores) * 100;
};
console.log(`O percentual de votos em branco é: ${percentualVotosBrancos(votosbrancos, totaldeeleitores).toFixed(2)}%`);
console.log(`O percentual de votos nulos é: ${percentualVotosNulos(votosnulos, totaldeeleitores).toFixed(2)}%`);
console.log(`O percentual de votos válidos é: ${percentualVotosValidos(votosvalidos, totaldeeleitores).toFixed(2)}%`);