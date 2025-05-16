import PromptSync from "prompt-sync";
const prompt = PromptSync();

const isParOuImpar = () => {
    let num = parseInt(prompt('Digite um número: '));
    if (num % 2 === 0) {
        return `${num} é par`;
    } else {
        return `${num} é ímpar`;
    }
}
console.log(isParOuImpar());