import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = Number(prompt('Digite um número: '));
const isNegativo = (num) => {
    for (let i = 1; num !== 0; i++) {
        if(num <= 0) {
            console.log('é negativo');
            num = Number(prompt('Digite OUTRO número: '));
        } else if(num > 0) {
            console.log('é positivo');
            num = Number(prompt('Digite OUTRO número: '));
        }
        else {
            console.log('Número inválido');
           num = Number(prompt('Digite UM número Válido: '));
        }
    }   
}

isNegativo(num);