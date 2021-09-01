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