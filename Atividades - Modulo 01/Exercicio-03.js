import PromptSync from "prompt-sync";
const prompt = PromptSync();

const aprovaOuReprova = () => {
    let nota = parseFloat(prompt('Digite a primeira nota: '));
    if (nota >= 7) {
        return 'Aprovado';
    } else if (nota >= 5 && nota < 7) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}
console.log(aprovaOuReprova());