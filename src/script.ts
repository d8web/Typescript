const n1 = document.getElementById('numero1') as HTMLInputElement;
const n2 = document.getElementById('numero2') as HTMLInputElement;
const botao = document.getElementById('calcular') as HTMLButtonElement;
const res = document.getElementById('resultado') as HTMLDivElement;

function calcular(n1: number, n2:number) {
    return n1 + n2;
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
});

// TypeScript
// Comandos [
// tsc fileName.ts, tsc fileName.ts --outDir directoryName, tsc src/script.ts --noEmitOnError
// ]

// Types Primitivos
let nome: string = 'Daniel';
let idade: number = 50;
let programador: boolean = true;

// Array de Strings
let animals: any = ['Girafa', 'Elefante', 'Joaninha', 'Formiga', 'Camaleão'];
// Array de Números
let ids: number[] = [12677, 26776, 35545, 53433, 56687];
animals.push(200);

// Types function params
function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase();  // Get Primary letter
    return firstLetter + name.substring(1); // return firstLetter + restName
}

firstLetterUpperCase('daniel'); // return Daniel

// Types para objetos
// Ponto de interrogação define a propriedade como opcional
function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

let user = {
    nome: 'Camila',
}

resumo(user);

// Múltiplos types
let cr7: string | number = 7;
cr7 = '7';

// Se a propriedade tiver múltiplos types, ao executar qualquer função ou coisa do tipo, precisa verificar o type da propriedade.
// Exemplo abaixo:
function mostrarAnimal(nome: string | number) {
    if(typeof nome === 'string') {
        console.log( nome.toUpperCase() );
    } else {
        console.log( nome );
    }
}

mostrarAnimal('Cavalo');
mostrarAnimal(45);

// Type e interface
type NameCompleto = string
let myName: NameCompleto = 'Daniel';

type NewIdade = string | number
let myIdade: NewIdade = '25'

/*
type Car = {
    name: string,
    price: number
}
*/
// Obs: Interface podemos adicionar novos types, com o type não podemos.
interface Car {
    name: string,
    price: number
}

function mostrarCarro(carro: Car) {
    return `O carro ${carro.name} custa R$ ${carro.price},00`
}

mostrarCarro({
    name: 'Camaro',
    price: 99000
});

// Type Assertions
let priceField = document.getElementById('price') as HTMLInputElement;
console.log(priceField.value);

// Types literais
const nameLiteral: string = 'Daniel';

function showText(text: string, align: 'center' | 'left' | 'right') {
    return `<div style="text-align: ${align}">${text}</div>`;
}

showText('Olá, este é meu texto', 'center');
showText('Olá, este é meu texto', 'left');
showText('Olá, este é meu texto', 'right');
// Error not exist oi no type 'center' | 'left' | 'right'
// showText('Olá, este é meu texto', 'oi');

// Inferência literal
const requisition = (url: string, method: 'GET' | 'POST') => {
    // ....
}

type requestDetails = {
    url: string,
    method: 'GET' | 'POST', // string, error
}

let req: requestDetails = {
    url: 'https://site.com.br/api',
    method: 'GET'
}

requisition(req.url, req.method);

// Type para funções
type calcFunction = (n1: number, n2: number) => number

const somar: calcFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: calcFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: calcFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: calcFunction = (n1, n2) => {
    return n1 / n2;
}

somar(20, 4);
subtrair(10, 4);
multiplicar(2, 4);
dividir(10, 2);

// Retorno void
// Faz algo mas não tem retorno, retornamos void, example remover elemento da tela
function removeElement(el: HTMLElement): void {
    el.remove();
}

let teste = document.getElementById('teste') as HTMLElement

removeElement(teste);

function testando(n1: number, n2: number) {
    //let nome = 'dani'
    return n1 + n2
    // "noEmitOnError": true, obs: descomentar "noUnusedLocals": true
}

// tsc src/fileName.ts -w comando watchMode

// create tsconfig.json
// tsc --init

// tsc compila todos os arquivos typescript após criar o tsconfig.json com tsc --init

// "outDir": "./public/assets/js", obs: posso colocar qualquer pasta
// "removeComments": true,
// "noEmitOnError": true,
// 