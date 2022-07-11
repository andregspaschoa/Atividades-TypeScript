// Curso de TypeScript

//01 - Compilando arquivo .ts em .js

// para compilar o arquivo .ts devemos realizar o download instalação e config
// do Node.js, npm para utilizar o comando no terminal integrado 
// comandos:
// npm -v, node -v, tsc --init, tsc -w

//02 - Criando e entendendo o arquivo .tsconfig

//após criar o arquivo tsconfig.json deve-se configura-lo
// utilizando o outDirs para inserir o local onde desejamos que o ts seja compilado
// o rootDirs serve para determinar o local raiz onde se encontram os arquivos ts a ser compilado

//03 - Tipagem implícita

let myName = "Andre";
let age = 27;

console.log(myName,age);

// No JS podemos alterar o conteudo de uma variavel de string para number ou boolean
// Porém ao criar uma variavel somente com 'string' mo TS e posteriormente tentar alterar
// acusará erro. Se começou com string o conteudo pode ser alterado somente para outro string
// O mesmo serve para arrays se criar um array só com o tipo string não se pode adicionar 
// um number ou boolean. 

// exemplo

let person = {
    name: 'Andre',
    age: 27,
    isAdmin: true,
};

person.isAdmin = false;

console.log(person);

//04 - Tipagem explícita com tipos primitivos

// Na tipagem explicita declaramos o tipo da variavel no momento em que a declaramos conforme o exemplo:

let myOtherName: string = 'Gabriel';

let myOtherAge: number = 27;

let otherAdmin: boolean = true;

// union types
// para trabalharmos com mais de um tipo podemos utilizar da seguinte forma:


let admin3: boolean | string | number = true;
// assim a variavel passa a aceitar os tipos informados

// tambem podemos declarar uma variavel sem valor a atribui-lo posteriormente exemplo:

let myFriend: string ;

myFriend = 'Adriano';

// 05 - Tipagem explícita com objetos

// Ao declarar um array na tipagem explicita também devemos colocar
// quais os tipos que a mesma devera aceitar

let names: (number | string) [] = [] // ao deixa-lo vazio devemos adicionar o [] = [];

names.push('Joao', 39);   
// posteriormente ao declararmos o valor devemos atribuir todos os tipos informados 
// pois se colocar apenas um retornará erro.

// object

//let person3: object;
//
//person3 = {
//    name: 'Alexandre',
//    age: 43,
//};

// person []; // ao declar um objeto dessa forma é possivel posteriormente declarar um array dento
// porém ao declarar da forma abaixo já retornará um erro.

let person3 : {
    name: string;  // pode fazer assim string | number; por exemplo
    age: number;
};

person3 = {
    name: 'Roberto',
    age: 38,
}

//06 - Tuplas

//let data: [number, string];
//data = [22, 'Larissa'];  // seguindo a ordem exata da declaração a cima para nao retornar erro. 

let data: [number, string][];  // exemplo utilizando as tuplas
data = [
    [20, 'Lucas'], // note que usando array de tuplas podemos acrescentar mais arrays posteriormente
    [30,'Sonis'],  // porém sempre seguindo a mesma ordem/padrao de tipos.
    [25, 'Paulo'],  
]

// e oberve que ao declarar da seguinte forma: let data: [number, string][] = [39, 'Alex']
// podemos utilizar o data.push(59,'Jose'); para adicionar propriedades a esse array
// outra obs é que ao trabalhar dessa forma com o .push é possivel declar somente o number
// ou string e também declarar alterando a ordem. ex: data.psh(95);
//obs se tentar adicionar um valor boolean que nao foi declarado retornará erro
// ao dar um console.log verá que dessa forma cada propriedade fica separada em um indice

//06 - Tuplas

// o intuito do mesmo é tornar o codigo mais legivel, exemplo:

enum UserStatus {
    Admin = 1,
    Editor = 2,
    User = 3,
}

function checkStatus(status: number) {
    switch (status) {
        case UserStatus.Admin:
            console.log('é admin');
            break;
        
        case UserStatus.Editor:
            console.log('é editor');
            break;
        
        case UserStatus.User:
            console.log('é user normal');
            break;
    }
}

checkStatus(1);

// outro exemplo

enum Teclas {
    Cima = 'ArrowUp',
    Baixo = 'ArrowDown',
    Esquerda = 'ArrowLeft',
    Direita = 'ArrowRight',
}

window.addEventListener('keydown', function(e){
    if (e.key === Teclas.Cima){
        console.log('pressionou a tecla arrow up');
    }
});

// 08 - Functions

// trabalhar com functions no typescript é basicamente como trabalhar no JavaScript também
// apenas com um adendo a tipagem explicita e implicita ex:

function sum(num1: number, num2: number){ //se estiver aparecendo 'void' na função significa que a mesma
        console.log(num1 + num2);         // não espera um retorno
    return num1 + num2;
}

sum(45, 54);

// 09 - Overload function

// let person: (x: string, p: number) =>number:  /* overload ou molde */ 

// person = (name: string, age: number) => {
// return age; 
// };

// console.log(person('Alexandre, 49));

// 10 - Tipo Any
// Se ao declararmos uma variavel adicionarmos o tipo any ao inves de 'string' 'number' ou 'boolean por ex
// ela irá aceitar qualquer dos tipos
// let myName: any;

// 11 - Parâmetros e propriedades opcionais

// Quando criamos a estrutura de um objeto ao implementa-lo devemos colocar todas as propriedades do mesmo
// caso contrario retornará erro 
// porém podemos colocar algumas propriedades como opcionais da seguinte forma:
// isAdmin?:  (ou seja utilizan o sinal '?')
// o mesmo é valido para os parametros de uma function 
// porém ao colocar um parametro como opcional em uma função sempre coloque o por ultimo

// 12 - Type alias

//Exemplo

type NumberOrString = number | string;

function dadosPessoais(name: string, age: NumberOrString, address: { street: string; number: NumberOrString}) {
    console.log(name, age, address);
}

dadosPessoais('Andre', '27', {street: 'my-street', number: 231});

// 13 - Interfaces

// Ao invés de ficar declarando as mesmas propriedades para objetos que possuiram a mesma estrutura
// podemos declarar: let user1: userInterface;
// funcionando de forma parecida com o type
// lembrando que o aconselhavél é utilizar o type só para tipos
// e o interfaces para objetos

// Exemplo

interface userInterface {
    name: string;
    age: number;
    color: string;
}

let user: userInterface

//14 - Webpack com typescript

//https://webpack.js.org/guides/typescript/

//npm install webpack webpack-cli --save-dev

// npm install --save-dev typescript ts-loader

//após a instalação é necessário criar o arquivo webpack.config.js sempre na raiz do projeto 
