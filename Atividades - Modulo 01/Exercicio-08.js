import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ordemCrescente = () => {
    let valor1 = parseInt(prompt('Digite o primeiro valor: '));
    let valor2 = parseInt(prompt('Digite o segundo valor: '));
    if (valor1 < valor2) {
        return `${valor1} ${valor2}`;
    } else {
        return `${valor2} ${valor1}`;
    }
}
console.log(`Os valores em ordem crescente são: ${ordemCrescente()}`);