import PromptSync from "prompt-sync";
const prompt = PromptSync();

const fatorial = (n) => {
    if (n < 0) {
        throw new Error("O número não pode ser negativo");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

const numero = parseInt(prompt("Digite um número para calcular o fatorial: "));

try {
    console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);
} catch (error) {
    console.log(error.message);
}