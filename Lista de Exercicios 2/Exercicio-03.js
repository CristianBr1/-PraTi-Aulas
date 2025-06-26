import PromptSync from "prompt-sync";
const prompt = PromptSync();

let fraseusuario = prompt('Digite uma frase: ');

const singleWord = (frase) => {
  const palavras = frase.toLowerCase().split(" "); 
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}

console.log(singleWord(fraseusuario));