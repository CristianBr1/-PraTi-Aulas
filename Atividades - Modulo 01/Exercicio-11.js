import PromptSync from "prompt-sync";
const prompt = PromptSync();

const SomaDosValores = () => {
    let valor = parseInt(prompt('Digite o primeiro valor: '));
    for (let i = 0; i < 4; i++) {
        valor += parseInt(prompt('Digite o próximo valor: '));
        console.log(`A soma dos valores é: ${valor}`);
    }
    return `O Total é: ${valor}`;
}
console.log(SomaDosValores());