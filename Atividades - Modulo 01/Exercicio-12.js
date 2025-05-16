import PromptSync from "prompt-sync";
const prompt = PromptSync();

const Tabuada = () => {
    let numero = parseInt(prompt('Digite um número: '));
    for (let i = 1; i <= 10; i++) {
        console.log(` ${numero} x ${i} = ${numero * i}`);
    }
    return `Tabuada do ${numero} concluída!`;
}
console.log(Tabuada());