let arrayNumbers = [];
let number = document.querySelector('#listNumber');
let result = document.querySelector('#result');
let elementButton = document.querySelector('#addButton');
let elementButtonFinal = document.querySelector('#finalButton');
let elementSelect = document.querySelector('#numberSelect');

number.focus(); //Foca no objeto desejado.

function isNumber(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true;
    }else{
        return false;
    } 
}

function inList(num, list) {
    if(list.indexOf(Number(num)) == -1) {
        return true;
    }else{
        return false;
    }
}

elementButton.onclick = function adicionar() {

    if(!isNumber(number.value)){
        alert('O valor está fora do alcance 1 a 100');
    }else{
        if(!inList(number.value, arrayNumbers)){
            alert('Já existe esse valor na lista');
        }else{
            arrayNumbers.push(Number(number.value));
            let item = document.createElement('option');
            item.text = `Valor ${number.value} adicionado.`;
            elementSelect.appendChild(item);
            result.innerHTML = '';
        }
    }
    number.value = '';
    number.focus();
}

elementButtonFinal.onclick = function show() {
    let total = arrayNumbers.length;
    if(total == 0){
        alert('Adicione valores antes de finalizar');
    }else{
        let maior = arrayNumbers[0];
        let menor = arrayNumbers[0];
        let sum = 0;
        let media = 0;
        for(let i in arrayNumbers){ //for (<variavel que desejar> in <array>) funciona do mesmo jeito
                                    //que um for comun. Lê-se para as posições dentro da array
            sum += arrayNumbers[i];
            if(arrayNumbers[i] > maior) {
                maior = arrayNumbers[i];
            }
            if(arrayNumbers[i] < menor) {
                menor = arrayNumbers[i];
            }
        }
        media = sum/total;

        result.innerHTML = '';
        result.innerHTML += `<p>Total de ${total} valores</p>`;
        result.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
        result.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
        result.innerHTML += `<p>A soma dos números do vetor foi ${sum}</p>`
        result.innerHTML += `<p>A média dos valores do vetor foi ${media}</p>`
    }
}