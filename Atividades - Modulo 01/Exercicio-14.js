import PromptSync from "prompt-sync";
const prompt = PromptSync();

const fatorial = () => {
    let num = parseInt(prompt('Digite um número: '));
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return `O fatorial é: ${num}`;
}
console.log(fatorial());