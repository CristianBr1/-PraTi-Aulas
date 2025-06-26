const debounce = (fn, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Exemplo de uso:
function logMessage(message) {
    console.log(`Executando: ${message}`);
}

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("Olá");
setTimeout(() => debouncedLog("Mundo"), 2100); // Será ignorado
setTimeout(() => debouncedLog("Final"), 1000); // Este será executado
