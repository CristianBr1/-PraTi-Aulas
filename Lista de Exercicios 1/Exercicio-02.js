import PromptSync from "prompt-sync";
const prompt = PromptSync();

const isOldOrYoung = () => {
    let isOld = parseInt(prompt('Digite sua idade: '));
    switch (true) {
        case (isOld <= 12 && isOld >= 0):
            return 'Você é uma criança';
        case (isOld > 12 && isOld <= 18):
            return 'Você é um adolescente';
        case (isOld > 18 && isOld <= 59):
            return 'Você é um adulto';
        case (isOld > 59):
            return 'Você é um idoso';
        default:
            return 'Idade inválida';
    }
}
console.log(isOldOrYoung());