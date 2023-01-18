// Curso de TypeScript

import { info } from "console";
import { getSystemErrorName } from "util";

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

// person []; // ao declarar um objeto dessa forma é possivel posteriormente declarar um array dentro
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
// outra obs é que ao trabalhar dessa forma com o .push é possivel declarar somente o number
// ou string e também declarar alterando a ordem. ex: data.push(95);
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
// isAdmin?:  (ou seja utilizam o sinal '?')
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

//1- npm install webpack webpack-cli --save-dev

//2- npm install --save-dev typescript ts-loader

//3- criar o arquivo webpack.config.js sempre na raiz do projeto e inserir o codigo do site official
//configurar o webpack.config.js
//verificar se posssui o arquivo index.js no local indicado
//se nao ocorrer erro irá criar package.json e package-lock.json
// no package.json em "scripts" add "dev":"NODE_ENV=DEVELOPMENT webpack --progress --watch"
//4- npm run dev
//erro ao executar o comando npm run dev // realizado reparo na instalação do node // nao gerou o bundle.js
//adicionar em module.exports: mode:process.env.NODE_ENV. (codigo não é compilado em uma linha só seguindo estruturado)

// Com o webpack voce consegue compilar o codigo em diversas partes 

   /* 15 - O básico sobre Classes */

// exemplo:

// crie um arquivo Person.ts
// export class Person {
//    
//
//name: string;
//age: number | string;

//constructor(name: string, age: number | string) {
//this.name = name;
//this.age = age;
//}}

// em seguida no arquivo index.ts coloque:

//import {Person} from '.classes/Person'
//const person = new Person('Andre', '27');
//console.log(person);

/* 16 - Modificadores de acesso */ 

// Quando queremos que a propriedade de uma classe não possa ser alterada podemos add o protected
// exemplo:
// protected myName:string = 'Andre';
// o private funciona de forma parecida, porém o protected é acessivel dentro da propria classe e subclasse
// ja o private é visto somente dentro da propria classe.
// ou ao nao declarar nada a classe fica publica 
// o readonly significa que a classe se torna apenas leitura não sendo possivel alterar.

                    // npm install fork-ts-checker-webpack-plugin -D
//plugin pra debugar       // colocar dentro arquivo ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
                    // plugins: [new ForkTsCheckerWebpackPlugin()]
// é até possivel burlar o readonly,protected e private com uma constructor, vai apresentar erro no editor porém vai compilar
// porém com o plugin do webpack é possivel nao deixar compilar.

     /* 17 - Setters e Getters */ 

     // (Person.ts)
//export class Person {
//    private myName:string = 'Andre Gabriel';
//
//    setMyName(myName:string){
//        this.myName = myName;
//    }
//
//    getSystemErrorName(){
//        return this.myName;
//    }
//    info():string{
//        return `Meu nome é ${this.myName}`;//
//    }
//}

// (index.ts)

//import { Person } from './classes/Person';

//const p = new Person();
//p.setMyName('Joao');
//console.log(p.info())           // vai exibir Meu nome é Joao

////console.log(p.getMyName())    // vai exibir só a propriedade (Joao)

     /* 18 - Atributos e Métodos estáticos */

// exemplo de como acessar um atributo ou metodo estático

//(person.ts)
//export class Person {
//    static myName:string = 'Andre'
//}

//index.ts

//import { Person } from ' .;classes/Person';

//console.log(Person.myName);  // se fosse um metodo seria console.log(Person.myName())

// com a propriedade metodo estatico é possivel chamar diretamente pela classe

     /* 19 - Possibilidade de não iniciar as propriedades */ 

// No typescript voce tem que atribuir um valor para a propriedade ao criar
// ou voce tem que que atribuir valor no metodo constructor

//porém no tsconfig.json é posivel compilar sem valor alterado o "strict"
// porém isso não é indicado, pois isso pode ocasionar problemas maiores no codigo

      /* 20 - Generics */ 

interface UserInterface<T> {
    name:string;
    age:number;
    data: T;
}

const personZ: UserInterface<string> = { 
    name: 'Alexandre',
    age: 39,
    data: 'Alexandre',
};

console.log(personZ);

     /* Exemplo com Função */ 

function personW<T extends number|string = string>(data: string) {
    return data;
}

const p = personW('Alexandre');
console.log(p);

     /* 21 - Generics em classes */ 

// Funciona de maneira bem parecida com função e objetos 


    /* 22 - Pegando elementos do DOM */

//
