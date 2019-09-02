// // Fibonacci forma recursiva

// // Partindo do principio que a sequencia começa com [1, 1], o vetor se inicia com esse valor
// let array = [1 , 1];

// function fibonnaci(number){
//     if(number < 2){
//         // Retorna o valor na posição number
//         return array[number];
//     }else{
//         // Aplica a recursividade
//         return array[number] = fibonnaci(number - 1) + fibonnaci(number - 2);
//     }
// }

// fibonnaci(16);

// console.log(array);

let array = [];

function fibonnaci(){
    for(let i=0; i<17; i++){
        if(i == 0 || i == 1){
            array[i] = 1;
        }else{
            array[i] = array[i - 1] + array[i - 2];
        }
    }
}

fibonnaci();
console.log(array);

function findNumber(number){
    let aux = [];
    for(let i=0; i<array.length; i++){
        if(number == array[i]){
            return aux[0] = i+1;
        }else if(number>array[i-1] && number<array[i+1]){
            aux[0] = i+1;
            aux[1] = array[i + 1] - number;
            return aux;
        }
    }
}

console.log(findNumber(1500));

