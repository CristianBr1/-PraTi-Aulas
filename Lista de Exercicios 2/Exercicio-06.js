const memorize = (fn) => {
    const cache = new Map(); // Cria um cache para armazenar resultados

    return function (...args) {
        const key = JSON.stringify(args); // Gera uma chave única com base nos argumentos

        if (cache.has(key)) {
            return cache.get(key); // Retorna valor armazenado se já existir no cache
        }

        const result = fn(...args); // Executa a função original
        cache.set(key, result); // Armazena o resultado no cache
        return result;
    };
}

// Exemplo de uso com função que calcula o fatorial:
const fatorial = (n) => {
    if (n < 0) throw new Error("O número não pode ser negativo");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const memorizedFatorial = memorize(fatorial);

console.log(memorizedFatorial(100));  // Calcula e armazena
console.log(memorizedFatorial(100));  // Retorna instantaneamente do cache
console.log(memorizedFatorial(6));  // Calcula um novo resultado