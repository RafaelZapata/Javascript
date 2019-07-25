let elementAddButton = document.querySelector('#addButton');
let elementNumber = document.querySelector('#number');
let elementList = document.querySelector('#numbersList');
let elementFinalButton = document.querySelector('#submitButton');
let array = [];
let elementResult = document.querySelector('#result');

function isNumberInRange(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true;
    } else {
        return false;
    }
}


function isNumberInList(num, list) {
    if(list.indexOf(Number(num)) != -1) {
        return true;
    } else {
        return false;
    }
}

elementAddButton.onclick  = function add() {
    if(!isNumberInRange(elementNumber.value)) {
        alert('Número está fora do escopo 1 a 100!');
    } else {
        if(isNumberInList(elementNumber.value, array)) {
            alert('O valor já existe!');
        } else {
            array.push(Number(elementNumber.value));
            let item = document.createElement('option');
            item.text = `Valor ${elementNumber.value} foi adicionado.`;
            elementList.appendChild(item);
        }
    }
    elementNumber.value = '';
    elementNumber.focus();
    elementResult.innerHTML = '';
}

elementFinalButton.onclick = function show() {
    var img = document.createElement('img');
    let total = array.length;
    let maior = array[0];
    let menor = array[0];
    let sum = 0;
    let media = 0;

    for(let i in array) {
        sum += array[i];
        if(menor > array[i]) menor = array[i]
        if(maior < array[i]) maior = array[i]
    }

    media = sum/total;

    if(total == 0) {
        alert('Adicione algum valor antes de começar');
    } else {
        elementResult.innerHTML = '';
        elementResult.innerHTML += `<p>Existe um total de ${total} números registrado</p>`;
        elementResult.innerHTML += `<p>O maior elemento é ${maior}</p>`;
        elementResult.innerHTML += `<p>O menor elemento é ${menor}</p>`;
        elementResult.innerHTML += `<p>A soma dos elementos foi ${sum}</p>`;
        elementResult.innerHTML += `<p>A media dos elementos da lista foi ${media}</p>`;
        img.setAttribute('id', 'image');
        img.setAttribute('src', './_image/beaut.png');
        elementResult.appendChild(img); //tem a função de inserir a imagem na div#result
    }
}