var elementButton = document.querySelector('#checkButton');

elementButton.onclick = function check(){
    var birthYear = document.querySelector('#birthYear');
    var date = new Date();
    var year = date.getFullYear();
    var age = year - Number(birthYear.value);
    var img = document.createElement('img');
    img.setAttribute('id', 'image'); //Atribui um elemento de id a imagem
    
    if(birthYear.value.length == 0 || birthYear.value > year) {
        alert('Verifique os dados e tente novamente!');
    } else {
        var elementGender = document.getElementsByName('radioGender');

        var genero = "";
        if(elementGender[0].checked) {
            genero = "Homem";
            if(age > 0 && age < 10) {
                // Criança
                img.setAttribute('src','_imagens/bebeMenino.png');
            } else if(age < 21) {
                // Jovem
                img.setAttribute('src', '_imagens/jovemHomem.png');
            } else if(age < 50){
                // Adulto
                img.setAttribute('src', '_imagens/adultoHomem.png');
            } else {
                // Idoso
                img.setAttribute('src', '_imagens/senhorHomem.png');
            }
        } else {
            genero = "Mulher";
            if (age > 0 && age < 10) {
                // Criança
                img.setAttribute('src', '_imagens/bebeMenina.png');
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', '_imagens/jovemMulher.png');
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', '_imagens/adultaMulher.png');
            } else {
                // Idoso
                img.setAttribute('src', '_imagens/senhoraMulher.png');
            }
        }

        var result = document.querySelector('#result');
        result.innerHTML = `${genero} com ${age}`;
        result.appendChild(img); //tem a função de inserir a imagem na div#result
    }

}