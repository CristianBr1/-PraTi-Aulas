import PromptSync from "prompt-sync";
const prompt = PromptSync();

const mediaAritmética = () => {
    let soma = 0;
    let cont = 0;
    let decimais = parseFloat(prompt('Digite um número decimal(ou 0 para sair): ').replace(',', '.'));
    while (decimais !== 0 && !isNaN(decimais)) {
        soma += decimais;
        cont++;
        decimais = parseFloat(prompt('Digite um número decimal (ou 0 para sair): ').replace(',', '.'));
    }
    return `A média aritmética é: ${Number(soma / cont).toFixed(2).replace('.', ',')}`;
}
console.log(mediaAritmética());