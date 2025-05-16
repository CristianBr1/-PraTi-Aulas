import PromptSync from "prompt-sync";
const prompt = PromptSync();

let senha = '123456';
let tentativas = 3;
let senhaDigitada = prompt('Digite a senha: ');
const verificarSenha = (senhaDigitada) => {
    while (tentativas > 0) {
        if (senhaDigitada === senha) {
            console.log('Acesso permitido');
            break;
        } else {
            tentativas--;
            console.log(`Senha incorreta. Você tem ${tentativas} tentativas restantes.`);
            senhaDigitada = prompt('Digite a senha Novamente: ');
        }
    }
    if (tentativas === 0) {
        console.log('Acesso negado, cartão bloqueado');
    }
}
verificarSenha(senhaDigitada);