import PromptSync from "prompt-sync";
const prompt = PromptSync();

const fibonacci = () => {
    let fibonacci = [1, 1];
    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return `Os 10 primeiros números da sequência de Fibonacci são: ${fibonacci}`;
}
console.log(fibonacci());