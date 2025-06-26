import PromptSync from "prompt-sync";
const prompt = PromptSync();

let AlunosturmaC = 60;
let AlunosturmaD = 20;

let porcentagemReprovadosTurmaC = prompt('Digite a porcentagem de alunos reprovados na turma C: ');
let porcentagemAprovadosTurmaD = prompt('Digite a porcentagem de alunos aprovados na turma D: ');

let numerosDealunosturmaC = AlunosturmaC * (porcentagemReprovadosTurmaC / 100);
let numerosDealunosturmaD = AlunosturmaD * (porcentagemAprovadosTurmaD / 100);
let AprovadosTurmaD = AlunosturmaD - numerosDealunosturmaD;
console.log(`O número de alunos reprovados na turma C é: ${numerosDealunosturmaC}`);
console.log(`O número de alunos reprovados na turma D é: ${AprovadosTurmaD}`);

let percentualTotalReprovados = (numerosDealunosturmaC + AprovadosTurmaD) / (AlunosturmaC + AlunosturmaD) * 100;
console.log(`O percentual total de alunos reprovados é: ${percentualTotalReprovados.toFixed(2)}%`);