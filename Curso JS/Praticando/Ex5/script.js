var btnElement = document.querySelector('#btnCalcular');

btnElement.onclick = function tabuada() {
    var inputElement = document.querySelector('#number');
    var table = document.querySelector('#table');

    if (inputElement.value.lenght == 0) {
        alert('Por favor, digite um número');
    } else {
        var number = Number(inputElement.value);
        table.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('label');
            item.innerHTML = `${number} x ${i} = ${number * i} <br>`
            table.appendChild(item);
            // let item = document.createElement('option');
            // item.text = `${number} x ${i} = ${number * i}`
            // table.appendChild(item);
        }
    }
}