const n1 = document.getElementById('numero1') as HTMLInputElement;
const n2 = document.getElementById('numero2') as HTMLInputElement;
const botao = document.getElementById('calcular') as HTMLButtonElement;
const res = document.getElementById('resultado') as HTMLDivElement;

function calcular(n1: number, n2:number) {
    return n1 + n2
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
animals.push(200)

// Types function params
function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase();  // Get Primary letter
    return firstLetter + name.substring(1); // return firstLetter + restName
}

firstLetterUpperCase('daniel'); // return Daniel