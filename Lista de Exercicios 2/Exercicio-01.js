import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ehAnoBissexto = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

const ehDataValida = (dia, mes, ano) => {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

    const diasPorMes = [31, (ehAnoBissexto(ano) ? 29 : 28), 31, 30, 31, 30,31, 31, 30, 31, 30, 31];
    return dia <= diasPorMes[mes - 1];
}

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mês: "));
const ano = parseInt(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log("✅ Data válida!");
} else {
  console.log("❌ Data inválida.");
}