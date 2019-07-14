var elementButton = document.querySelector('#buttonCount');

elementButton.onclick = function count(){
    // Variáveis
    var start = document.querySelector('#start');
    var end = document.querySelector('#end');
    var cont = document.querySelector('#cont');
    var result = document.querySelector('#result');
    
    // Primeira verificação para saber se tem algum campo vazio
    if(start.value.length == 0 || end.value.length == 0 || cont.value.length == 0) {
        result.innerHTML = "Impossível conta! Faltam dados!";
    } else {
        let ini = Number(start.value);
        let target = Number(end.value);
        let interval = Number(cont.value);

        // Verificação para saber se o intervalo é 0
        if (interval <= 0){
            alert("Considerando PASSO 1");
            interval = 1;
        } 
        if(ini < target){
            // Contagem crescente
            for (let i = ini; i <= target; i += interval) {
                result.innerHTML += `${i} `;
            }
        } else {
            // Contagem regressiva
            for (let i = ini; i >= target; i -= interval) {
                result.innerHTML += `${i} `;
            }
        }
    }
}