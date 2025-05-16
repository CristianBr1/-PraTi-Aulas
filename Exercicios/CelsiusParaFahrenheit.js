import PromptSync from "prompt-sync";
const prompt = PromptSync();

let Celsius = Number(prompt('Digite a temperatura em graus Celsius: '));
const GrausCelcius = (Celsius) => {
    return (Celsius * 9 / 5) + 32;
}

console.log(`A temperatura em graus Fahrenheit é: ${parseInt(GrausCelcius(Celsius))}`);

let Fahrenheit = Number(prompt('Digite a temperatura em graus Fahrenheit: '));
const GrausFahrenheit = (Fahrenheit) => {
    return (Fahrenheit - 32) * 5 / 9;
}
console.log(`A temperatura em graus Celsius é: ${parseInt(GrausFahrenheit(Fahrenheit))}`);

function CelsiusParaFahrenheit(Celsius) {
    return (Celsius * 9 / 5) + 32;
}
console.log(`A temperatura em graus Fahrenheit é: ${CelsiusParaFahrenheit(Celsius)}`);

function FahrenheitParaCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}
console.log(`A temperatura em graus Celsius é: ${FahrenheitParaCelsius(Fahrenheit)}`);

