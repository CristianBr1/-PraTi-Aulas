import PromptSync from "prompt-sync";
const prompt = PromptSync();

const tipoTriangulo = () => {
    let primeiraLadoTriangulo = parseFloat(prompt('Digite o valor do lado do triângulo: '));
    let segundaLadoTriangulo = parseFloat(prompt('Digite o valor do lado do triângulo: '));
    let terceiraLadoTriangulo = parseFloat(prompt('Digite o valor do lado do triângulo: '));
    if (primeiraLadoTriangulo === segundaLadoTriangulo && primeiraLadoTriangulo === terceiraLadoTriangulo) {
        return 'Triângulo equilátero';
    } else if (primeiraLadoTriangulo === segundaLadoTriangulo || primeiraLadoTriangulo === terceiraLadoTriangulo || segundaLadoTriangulo === terceiraLadoTriangulo) {
        return 'Triângulo isósceles';
    } else {
        return 'Triângulo escaleno';
    }
}
console.log(tipoTriangulo());