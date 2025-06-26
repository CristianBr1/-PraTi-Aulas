import PromptSync from "prompt-sync";
const prompt = PromptSync();

const repeatNum = () => {
    let num = parseInt(prompt('Digite um número: '));
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += `${num} `;
    }
    return result.trim();
}
console.log(repeatNum());