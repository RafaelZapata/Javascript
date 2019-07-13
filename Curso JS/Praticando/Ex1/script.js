var textFieldN1 = document.querySelector('input#txtN1');
var textFieldN2 = document.querySelector('input#txtN2');
var resultElement = document.querySelector('div#result');
var btnElement = document.querySelector('button');

btnElement.onclick = function sum() {
    var number1 = Number(textFieldN1.value);
    var number2 = Number(textFieldN2.value);
    var res = number1 + number2;
    resultElement.innerHTML = `A soma entre ${number1} e ${number2} é igual a <strong>${res}<strong/>`;
}