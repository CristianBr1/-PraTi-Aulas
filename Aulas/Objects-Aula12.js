// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// const biblioteca = [
//     { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
//     { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
//     { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
//     { titulo: "1984", autor: "George Orwell", ano: 1949 },
//     { titulo: "O Grande Gatsby", autor: "F. Scott Fitzgerald", ano: 1925 },
//     { titulo: "Orgulho e Preconceito", autor: "Jane Austen", ano: 1813 },
//     { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
//     { titulo: "A Metamorfose", autor: "Franz Kafka", ano: 1915 },
//     { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 },
//     { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997 }
// ];



// for(let livro of biblioteca) {
//     if (livro.ano < 1900) {
//         console.log(`${livro.titulo} publicado em ${livro.ano}`)
//     }
// }

// const pesquisarFilme = prompt('Digite um genero: ');

// const filmes = [
//   { titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime" },
//   { titulo: "Clube da Luta", ano: 1999, genero: "Drama" },
//   { titulo: "Matrix", ano: 1999, genero: "Ficcao" },
//   { titulo: "Interestelar", ano: 2014, genero: "Ficcao" },
//   { titulo: "Parasita", ano: 2019, genero: "Suspense" },
//   { titulo: "A Origem", ano: 2010, genero: "Ficcao" },
//   { titulo: "Os Vingadores", ano: 2012, genero: "Acao" },
//   { titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, genero: "Fantasia" },
//   { titulo: "Forrest Gump", ano: 1994, genero: "Drama" },
//   { titulo: "Pulp Fiction", ano: 1994, genero: "Crime" }
// ];

// for(let filme of filmes) {
//     if (filme.genero === (pesquisarFilme.charAt(0).toUpperCase() + pesquisarFilme.slice(1).toLowerCase())) {
//         console.log(`${filme.titulo} lançado em ${filme.ano}`)
//     }
// }

// let num = Number.parseInt(prompt('Digite um numero: '));

const fatorial = (num) => {
    let soma = 1
    for (let i = 1; i <= num; i++) {
       soma *= i
    }
    return soma;
}

console.log(fatorial(5))

const fibonacci = () => {
    let fib = [1,1];
    for(let i = 2; i < 10; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
    }
    return `Os 10 primeiros números da sequência de Fibonacci são: ${fib}`;
}

console.log(fibonacci())