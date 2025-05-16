const prompt = require('prompt-sync')();

// let Celsius = Number(prompt('Digite a temperatura em graus Celsius: '));
// const GrausCelcius = (Celsius) => {
//     return (Celsius * 9 / 5) + 32;
// }

// console.log(`A temperatura em graus Fahrenheit é: ${parseInt(GrausCelcius(Celsius))}`);

// let Fahrenheit = Number(prompt('Digite a temperatura em graus Fahrenheit: '));
// const GrausFahrenheit = (Fahrenheit) => {
//     return (Fahrenheit - 32) * 5 / 9;
// }
// console.log(`A temperatura em graus Celsius é: ${parseInt(GrausFahrenheit(Fahrenheit))}`);

// function CelsiusParaFahrenheit(Celsius) {
//     return (Celsius * 9 / 5) + 32;
// }
// console.log(`A temperatura em graus Fahrenheit é: ${CelsiusParaFahrenheit(Celsius)}`);

// function FahrenheitParaCelsius(Fahrenheit) {
//     return (Fahrenheit - 32) * 5 / 9;
// }
// console.log(`A temperatura em graus Celsius é: ${FahrenheitParaCelsius(Fahrenheit)}`);

// let totaldeeleitores = Number(prompt('Digite o total de eleitores: '));
// let votosbrancos = Number(prompt('Digite o total de votos em branco: '));
// let votosnulos = Number(prompt('Digite o total de votos nulos: '));
// let votosvalidos = Number(prompt('Digite o total de votos válidos: '));

// const percentualVotosBrancos = (votosbrancos, totaldeeleitores) => {
//     return (votosbrancos / totaldeeleitores) * 100;
// };
// const percentualVotosNulos = (votosnulos, totaldeeleitores) => {
//     return (votosnulos / totaldeeleitores) * 100;
// };
// const percentualVotosValidos = (votosvalidos, totaldeeleitores) => {
//     return (votosvalidos / totaldeeleitores) * 100;
// };
// console.log(`O percentual de votos em branco é: ${percentualVotosBrancos(votosbrancos, totaldeeleitores).toFixed(2)}%`);
// console.log(`O percentual de votos nulos é: ${percentualVotosNulos(votosnulos, totaldeeleitores).toFixed(2)}%`);
// console.log(`O percentual de votos válidos é: ${percentualVotosValidos(votosvalidos, totaldeeleitores).toFixed(2)}%`);

// let turmaC = Number(prompt('Digite o número de alunos da turma C: '));
// let turmaD = Number(prompt('Digite o número de alunos da turma D: '));

// let TotalDeAprovadosTurmaC = 0;
// let  TotalDeAprovadosTurmaD = 0;

// const mediaTurmaC = (turmaC) => {
//     let somaTurmaC = 0;
//     for (let i = 1; i <= turmaC; i++) {
//         let nota = Number(prompt(`Digite a nota do aluno ${i} da turma C: `));
//         somaTurmaC += nota;
//         if (nota >= 7) {
//             console.log(`O aluno ${i} da turma C foi aprovado com a nota ${nota}`);
//             TotalDeAprovadosTurmaC++;
//         } else {
//             console.log(`O aluno ${i} da turma C foi reprovado com a nota ${nota}`);
//         }
//     }
//     return somaTurmaC / turmaC;
// }

// const mediaTurmaD = (turmaD) => {
//     let somaTurmaD = 0;
//     for (let i = 1; i <= turmaD; i++) {
//         let nota = Number(prompt(`Digite a nota do aluno ${i} da turma D: `));
//         somaTurmaD += nota;
//         if (nota >= 7) {
//             console.log(`O aluno ${i} da turma D foi aprovado com a nota ${nota}`);
//             TotalDeAprovadosTurmaD++;
//         } else {
//             console.log(`O aluno ${i} da turma D foi reprovado com a nota ${nota}`);
//         }
//     }
//     return somaTurmaD / turmaD;
// }

// const mediaGeral = (mediaTurmaC, mediaTurmaD) => {
//     return (mediaTurmaC + mediaTurmaD) / 2;
// }



// const mediaTurmaCResult = mediaTurmaC(turmaC);
// const mediaTurmaDResult = mediaTurmaD(turmaD);

// const mediaGeralResult = mediaGeral(mediaTurmaCResult, mediaTurmaDResult);
// console.log(`O total de alunos aprovados na turma C é: ${TotalDeAprovadosTurmaC}`);
// console.log(`O total de alunos aprovados na turma D é: ${TotalDeAprovadosTurmaD}`);
// console.log(`A média da turma C é: ${mediaTurmaCResult.toFixed(2)}`);
// console.log(`A média da turma D é: ${mediaTurmaDResult.toFixed(2)}`);
// console.log(`A média geral é: ${mediaGeralResult.toFixed(2)}`);


// let AlunosturmaC = 60;
// let AlunosturmaD = 20;

// let porcentagemReprovadosTurmaC = prompt('Digite a porcentagem de alunos reprovados na turma C: ');
// let porcentagemAprovadosTurmaD = prompt('Digite a porcentagem de alunos aprovados na turma D: ');

// let numerosDealunosturmaC = AlunosturmaC * (porcentagemReprovadosTurmaC / 100);
// let numerosDealunosturmaD = AlunosturmaD * (porcentagemAprovadosTurmaD / 100);
// let AprovadosTurmaD = AlunosturmaD - numerosDealunosturmaD;
// console.log(`O número de alunos reprovados na turma C é: ${numerosDealunosturmaC}`);
// console.log(`O número de alunos reprovados na turma D é: ${AprovadosTurmaD}`);

// let percentualTotalReprovados = (numerosDealunosturmaC + AprovadosTurmaD) / (AlunosturmaC + AlunosturmaD) * 100;
// console.log(`O percentual total de alunos reprovados é: ${percentualTotalReprovados.toFixed(2)}%`);

// let DiasDasemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
// let dia = prompt('Digite o dia da semana: ');

// for (let i = 0; i < DiasDasemana.length; i++) {
//     if (dia.toLowerCase() === DiasDasemana[i].toLowerCase()) {
//         if (DiasDasemana[i] === 'Domingo' || DiasDasemana[i] === 'Sabado') {
//             console.log(`${dia.toLowerCase()} é um final de semana`);
//         } else {
//             console.log(`${dia.toLowerCase()} é um dia útil`);
//         }
//         break;
//     }
//     if (i === DiasDasemana.length - 1) {
//         console.log('Dia inválido');
//     }
// };

// let num = Number(prompt('Digite um número: '));
// const isNegativo = (num) => {
//     for (let i = 1; num !== 0; i++) {
//         if(num <= 0) {
//             console.log('é negativo');
//             num = Number(prompt('Digite OUTRO número: '));
//         } else if(num > 0) {
//             console.log('é positivo');
//             num = Number(prompt('Digite OUTRO número: '));
//         }
//         else {
//             console.log('Número inválido');
//            num = Number(prompt('Digite UM número Válido: '));
//         }
//     }   
// }

// isNegativo(num);


let senha = '123456';
let tentativas = 3;
let senhaDigitada = prompt('Digite a senha: ');
const verificarSenha = (senhaDigitada) => {
    while (tentativas > 0) {
        if (senhaDigitada === senha) {
            console.log('Acesso permitido');
            break;
        } else {
            tentativas--;
            console.log(`Senha incorreta. Você tem ${tentativas} tentativas restantes.`);
            senhaDigitada = prompt('Digite a senha Novamente: ');
        }
    }
    if (tentativas === 0) {
        console.log('Acesso negado, cartão bloqueado');
    }
}
verificarSenha(senhaDigitada);