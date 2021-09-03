var n1 = document.getElementById('numero1');
var n2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
});
// TypeScript
// Comandos [
// tsc fileName.ts, tsc fileName.ts --outDir directoryName, tsc src/script.ts --noEmitOnError
// ]
// Types Primitivos
var nome = 'Daniel';
var idade = 50;
var programador = true;
// Array de Strings
var animals = ['Girafa', 'Elefante', 'Joaninha', 'Formiga', 'Camaleão'];
// Array de Números
var ids = [12677, 26776, 35545, 53433, 56687];
animals.push(200);
// Types function params
function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toUpperCase(); // Get Primary letter
    return firstLetter + name.substring(1); // return firstLetter + restName
}
firstLetterUpperCase('daniel'); // return Daniel
// Types para objetos
// Ponto de interrogação define a propriedade como opcional
function resumo(usuario) {
    if (usuario.idade !== undefined) {
        return "Ol\u00E1 " + usuario.nome + ", tudo bem? Voc\u00EA tem " + usuario.idade + " anos";
    }
    else {
        return "Ol\u00E1 " + usuario.nome + ", tudo bem?";
    }
}
var user = {
    nome: 'Camila'
};
resumo(user);
// Múltiplos types
var cr7 = 7;
cr7 = '7';
// Se a propriedade tiver múltiplos types, ao executar qualquer função ou coisa do tipo, precisa verificar o type da propriedade.
// Exemplo abaixo:
function mostrarAnimal(nome) {
    if (typeof nome === 'string') {
        console.log(nome.toUpperCase());
    }
    else {
        console.log(nome);
    }
}
mostrarAnimal('Cavalo');
mostrarAnimal(45);
var myName = 'Daniel';
var myIdade = '25';
function mostrarCarro(carro) {
    return "O carro " + carro.name + " custa R$ " + carro.price + ",00";
}
mostrarCarro({
    name: 'Camaro',
    price: 99000
});
