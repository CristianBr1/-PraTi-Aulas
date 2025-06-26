import PromptSync from "prompt-sync";
const prompt = PromptSync();

const calcularIMC = () => {
    let peso = parseFloat(prompt('Digite seu peso em kg, exemplo 70: '));
    let altura = parseFloat(prompt('Digite sua altura em metros, exemplo 1.80: ').replace(',', '.'));
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`;
    } else if (imc >= 18.5 && imc < 24.9) {
        return `Seu IMC é ${imc.toFixed(2)} e você está com o peso normal`;
    } else if (imc >= 25 && imc < 29.9) {
        return `Seu IMC é ${imc.toFixed(2)} e você está acima do peso`;
    } else {
        return `Seu IMC é ${imc.toFixed(2)} e você está obeso`;
    }
}
console.log(calcularIMC());