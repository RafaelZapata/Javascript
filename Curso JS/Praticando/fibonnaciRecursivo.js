// Fibonacci forma recursiva

// Partindo do principio que a sequencia começa com [1, 1], o vetor se inicia com esse valor
let array = [1 , 1];

function fibonnaci(number){
    if(number < 2){
        // Retorna o valor na posição number
        return array[number];
    }else{
        // Aplica a recursividade
        return array[number] = fibonnaci(number - 1) + fibonnaci(number - 2);
    }
}

fibonnaci(16);

console.log(array);