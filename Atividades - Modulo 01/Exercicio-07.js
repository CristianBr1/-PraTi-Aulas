import PromptSync from "prompt-sync";
const prompt = PromptSync();

const precoDaMaca = () => {
    let quantidade = parseInt(prompt('Digite a quantidade: '));
    if (quantidade < 12) {
        return quantidade * 0.30;
    } else {
        return quantidade * 0.25;
    }
}
console.log(`O preço total é: R$ ${precoDaMaca().toFixed(2).replace('.', ',')}`);