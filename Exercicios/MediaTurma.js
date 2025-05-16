const prompt = require('prompt-sync')();


let turmaC = Number(prompt('Digite o número de alunos da turma C: '));
let turmaD = Number(prompt('Digite o número de alunos da turma D: '));

let TotalDeAprovadosTurmaC = 0;
let  TotalDeAprovadosTurmaD = 0;

const mediaTurmaC = (turmaC) => {
    let somaTurmaC = 0;
    for (let i = 1; i <= turmaC; i++) {
        let nota = Number(prompt(`Digite a nota do aluno ${i} da turma C: `));
        somaTurmaC += nota;
        if (nota >= 7) {
            console.log(`O aluno ${i} da turma C foi aprovado com a nota ${nota}`);
            TotalDeAprovadosTurmaC++;
        } else {
            console.log(`O aluno ${i} da turma C foi reprovado com a nota ${nota}`);
        }
    }
    return somaTurmaC / turmaC;
}

const mediaTurmaD = (turmaD) => {
    let somaTurmaD = 0;
    for (let i = 1; i <= turmaD; i++) {
        let nota = Number(prompt(`Digite a nota do aluno ${i} da turma D: `));
        somaTurmaD += nota;
        if (nota >= 7) {
            console.log(`O aluno ${i} da turma D foi aprovado com a nota ${nota}`);
            TotalDeAprovadosTurmaD++;
        } else {
            console.log(`O aluno ${i} da turma D foi reprovado com a nota ${nota}`);
        }
    }
    return somaTurmaD / turmaD;
}

const mediaGeral = (mediaTurmaC, mediaTurmaD) => {
    return (mediaTurmaC + mediaTurmaD) / 2;
}



const mediaTurmaCResult = mediaTurmaC(turmaC);
const mediaTurmaDResult = mediaTurmaD(turmaD);

const mediaGeralResult = mediaGeral(mediaTurmaCResult, mediaTurmaDResult);
console.log(`O total de alunos aprovados na turma C é: ${TotalDeAprovadosTurmaC}`);
console.log(`O total de alunos aprovados na turma D é: ${TotalDeAprovadosTurmaD}`);
console.log(`A média da turma C é: ${mediaTurmaCResult.toFixed(2)}`);
console.log(`A média da turma D é: ${mediaTurmaDResult.toFixed(2)}`);
console.log(`A média geral é: ${mediaGeralResult.toFixed(2)}`);