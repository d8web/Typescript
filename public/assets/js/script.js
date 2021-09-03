"use strict";
const n1 = document.getElementById('numero1');
const n2 = document.getElementById('numero2');
const botao = document.getElementById('calcular');
const res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
});
let nome = 'Daniel';
let idade = 50;
let programador = true;
let animals = ['Girafa', 'Elefante', 'Joaninha', 'Formiga', 'Camaleão'];
let ids = [12677, 26776, 35545, 53433, 56687];
animals.push(200);
function firstLetterUpperCase(name) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
firstLetterUpperCase('daniel');
function resumo(usuario) {
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    }
    else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}
let user = {
    nome: 'Camila',
};
resumo(user);
let cr7 = 7;
cr7 = '7';
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
let myName = 'Daniel';
let myIdade = '25';
function mostrarCarro(carro) {
    return `O carro ${carro.name} custa R$ ${carro.price},00`;
}
mostrarCarro({
    name: 'Camaro',
    price: 99000
});
let priceField = document.getElementById('price');
console.log(priceField.value);
const nameLiteral = 'Daniel';
function showText(text, align) {
    return `<div style="text-align: ${align}">${text}</div>`;
}
showText('Olá, este é meu texto', 'center');
showText('Olá, este é meu texto', 'left');
showText('Olá, este é meu texto', 'right');
const requisition = (url, method) => {
};
let req = {
    url: 'https://site.com.br/api',
    method: 'GET'
};
requisition(req.url, req.method);
const somar = (n1, n2) => {
    return n1 + n2;
};
const subtrair = (n1, n2) => {
    return n1 - n2;
};
const multiplicar = (n1, n2) => {
    return n1 * n2;
};
const dividir = (n1, n2) => {
    return n1 / n2;
};
somar(20, 4);
subtrair(10, 4);
multiplicar(2, 4);
dividir(10, 2);
function removeElement(el) {
    el.remove();
}
let teste = document.getElementById('teste');
removeElement(teste);
