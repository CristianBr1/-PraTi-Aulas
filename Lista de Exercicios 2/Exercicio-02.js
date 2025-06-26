import PromptSync from "prompt-sync";
const prompt = PromptSync();

const gerarNumAleatorio = () => {
    return Math.floor(Math.random() * 101);
}

let randomNumbers = gerarNumAleatorio();
// console.log("Numero gerado: ", randomNumbers);

const guessNumber = () => {
    let tentativa;
    let tentativas = 0;

    while (true) {
        tentativa = parseInt(prompt("Digite seu palpite: "));
        tentativas++;
        if(tentativa === randomNumbers) {
            console.log(`🎉 Parabéns, você acertou em ${tentativas} tentativa(s)!`);
            break;
        }   else if (tentativa < randomNumbers) {
        console.log("🔼 Mais alto...");
        }   else {
            console.log("🔽 Mais baixo...");
        }
    }
}

guessNumber();
