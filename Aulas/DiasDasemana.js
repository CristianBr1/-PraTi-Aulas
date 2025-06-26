import PromptSync from "prompt-sync";
const prompt = PromptSync();

let DiasDasemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
let dia = prompt('Digite o dia da semana: ');

for (let i = 0; i < DiasDasemana.length; i++) {
    if (dia.toLowerCase() === DiasDasemana[i].toLowerCase()) {
        if (DiasDasemana[i] === 'Domingo' || DiasDasemana[i] === 'Sabado') {
            console.log(`${dia.toLowerCase()} é um final de semana`);
        } else {
            console.log(`${dia.toLowerCase()} é um dia útil`);
        }
        break;
    }
    if (i === DiasDasemana.length - 1) {
        console.log('Dia inválido');
    }
};