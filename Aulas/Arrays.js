// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

const gerarArrayAleatorio = (tamanho) => {
  const array = [];
  for (let i = 0; i < tamanho; i++) {
    array.push(Math.floor(Math.random() * 100));
    }
  return array;
}


let randomNumbers = gerarArrayAleatorio(10);
console.log("Array gerado: ", randomNumbers);

const array = randomNumbers.sort((a, b) => a - b);
console.log("Ordem crescente: ", array);


const soma = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += parseInt(array[i]); 
    }
    return soma;
}

console.log( "Soma Gerada: ", soma(array));

const media = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += parseInt(array[i]); 
    }
    return soma / array.length;
}
console.log("Média gerada: ", media(array));

const pares = (array) => {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
console.log("Pares gerados", pares(array));

const matriz = (tamanho) => {
    let matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {

            matriz[i].push(Math.floor(Math .random() * 100));
        }
        matriz[i].sort((a,b) => a - b)
    
}
    return matriz;
}

let chamaMatriz = matriz(5);

console.log("Matriz gerada: ", chamaMatriz);


const somarDiagonalPrincipal = (chamaMatriz) => {
  let soma = 0;
  for (let i = 0; i < chamaMatriz.length; i++) {
    soma += chamaMatriz[i][i];
  }
  return soma;
}

console.log("Soma da Diagonal: ", somarDiagonalPrincipal(chamaMatriz));

const ordenaArray = (arr) => {
    return arr.sort((a,b) => a - b )
}

let chama = console.log("Array Ordenado: ",ordenaArray(randomNumbers));

const SomaArray = (arr) => {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

let chamasoma = console.log("soma do Array: ", SomaArray(randomNumbers));


const Maiornumero = (arr) => {
    let maior = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

let chamaMaior = console.log("Maior Numero: ", Maiornumero(randomNumbers));