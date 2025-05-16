const prompt = require('prompt-sync')();


const x = 60;
if (x >= 18 && x <= 32) 
    { console.log("Apto");
    } else {
        console.log("nao apto");
    }

const par = 3;
if(par % 2 == 0) {
    console.log("par");
}else {
        console.log("impar");
    }

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
const maiornumero = Math.max(numero1, numero2, numero3);
console.log(maiornumero);

const arr = [1, 70, 3, 4, 5];
const max = Math.max(...arr);
console.log(max);
a = 1
b= 2


const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
console.log(sum(a, b));
console.log(sub(a, b));
console.log(mult(a, b));
console.log(div(a, b));


    let valor1 = parseInt(prompt('Digite o primeiro valor: '));
    let operacao = prompt('Digite a operação matemática:');
    let valor2 = parseInt(prompt('Digite o segundo valor: '));
let resultado = 0;
switch (operacao) {
    case '+':
        resultado = valor1 + valor2;
        console.log(`o resultado de ${valor1}${operacao}${valor2} é ${resultado}`);
        break;
    case '-':
        resultado = valor1 - valor2;
        console.log(`o resultado de ${valor1}${operacao}${valor2} é ${resultado}`);
        break;
    case '*':
        resultado = valor1 * valor2;
        console.log(`o resultado de ${valor1}${operacao}${valor2} é ${resultado}`);
        break;
    case '/':
        resultado = valor1 / valor2;
        console.log(`o resultado de ${valor1}${operacao}${valor2} é ${resultado}`);
        break;
    default:
        console.log('Operação inválida');
}

    let a = Number(prompt('Digite o primeiro valor: '));
    let b = Number(prompt('Digite o segundo valor: '));
let calcMdc = (a, b) => {
    if (b === 0) {
        return a;
    }
    return calcMdc(b, a % b);
}
console.log(calcMdc(a, b));


const isPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrimo(num) ? `${num} é primo` : `${num} não é primo`);

let num = Number(prompt('Digite Um Numero: '));
const tabuada = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
tabuada(num);
