import PromptSync from "prompt-sync";
const prompt = PromptSync();


// const fatorial = (num) => {
//     if(num === 0) {
//         return 1;
//     } else {
//         return num * fatorial(num - 1);
//     }
// }

// console.log(fatorial(5))

// const fibonacci = () => {
//     let fib = [1,1];
//     for(let i = 2; i < 10; i++) {
//             fib[i] = fib[i - 1] + fib[i - 2];
//     };
//     return `Os 10 primeiros números da sequência de Fibonacci são: ${fib}`;
// };

// console.log(fibonacci());

// const fibonacciRecursivo = (n, sequencia = [1, 1]) => {
//   if (sequencia.length >= n) return sequencia;
  
//   return fibonacciRecursivo(n, [...sequencia, sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]]);
// };

// const primeiros10Fibonacci = fibonacciRecursivo(10);
// console.log(`Os 10 primeiros números da sequência de Fibonacci são: ${primeiros10Fibonacci.join(", ")}`);

const loja = {
  nome: "TechStore",
  endereco: "Av. Principal, 123 - Porto Alegre, RS",
  categorias: {
    eletronicos: [
      { nome: "Smartphone", preco: 2500, estoque: 10 },
      { nome: "Notebook", preco: 4500, estoque: 5 },
      { nome: "Smartwatch", preco: 1200, estoque: 8 }
    ],
    roupas: [
      { nome: "Camiseta", preco: 80, estoque: 20 },
      { nome: "Jaqueta", preco: 250, estoque: 15 },
      { nome: "Tênis", preco: 300, estoque: 12 }
    ],
    livros: [
      { nome: "JavaScript para Iniciantes", preco: 90, estoque: 25 },
      { nome: "Clean Code", preco: 120, estoque: 10 },
      { nome: "Design Patterns", preco: 150, estoque: 7 }
    ]
  },
    mostrarInfo: function() {
        const categoria = prompt("Digite o nome da categoria que deseja pesquisar: ").toLowerCase();
        if(this.categorias[categoria]) {
            console.log(categoria);
            this.categorias[categoria].forEach(prod => {
                console.log(`- ${prod.nome}`)
                
            });
        }
    }
};

loja.mostrarInfo();

const lojas = {
  categorias: {
    eletrônicos: [
      { nome: "Smartphone", preco: 2500, estoque: 10 },
      { nome: "Notebook", preco: 4500, estoque: 5 },
      { nome: "Smartwatch", preco: 1200, estoque: 8 }
    ],
    roupas: [
      { nome: "Camiseta", preco: 80, estoque: 20 },
      { nome: "Jaqueta", preco: 250, estoque: 15 },
      { nome: "Tênis", preco: 300, estoque: 12 }
    ],
    livros: [
      { nome: "JavaScript para Iniciantes", preco: 90, estoque: 25 },
      { nome: "Clean Code", preco: 120, estoque: 10 },
      { nome: "Design Patterns", preco: 150, estoque: 7 }
    ]
  },
  mostrarTodasCategorias: function() {
    console.log("Lista de categorias e seus produtos:");
    
    // Percorre todas as categorias
    Object.keys(this.categorias).forEach(categoria => {
      console.log(`Categoria: ${categoria}`);
      this.categorias[categoria].forEach(produto => {
        console.log(`  - ${produto.nome}`);
      });
    });
  }
};

lojas.mostrarTodasCategorias();