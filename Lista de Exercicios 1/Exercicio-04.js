import PromptSync from "prompt-sync";
const prompt = PromptSync();

let option1 = 'bife a rolê';
let option2 = 'frango assado';
let option3 = 'peixe assado';
const findOptionText = () => {
    let findOption = parseInt(prompt('Digite o número da opção desejada: '));
    switch (findOption) {
        case 1:
            return `Você escolheu a opção 1 - ${option1}`;
        case 2:
            return `Você escolheu a opção 2 - ${option2}`;
        case 3:
            return `Você escolheu a opção 3 - ${option3}`;
        default:
            return 'Opção inválida';
    }
}
console.log(findOptionText());