function load () {
    var message = document.querySelector('#message');
    var image = document.querySelector('#image');
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    // var hour = 00;
    
    message.innerHTML = `Agora são ${hour}:${minutes}.`;
    if(hour >= 0 && hour < 12) {
        // Bom dia
        image.src = '_images/Manha.png';
        document.body.style.backgroundColor = '#fffca5';
        message.innerHTML += ` Bom dia`;
    }else if(hour >= 12 && hour < 18) {
        // Boa tarde
        image.src = '_images/Tarde.png';
        document.body.style.backgroundColor = '#ec9a17';
        message.innerHTML += ` Boa Tarde`;
    }else {
        // Boa noite
        image.src = '_images/Noite.png';
        document.body.style.backgroundColor = '#34312e';
        message.innerHTML += ` Boa Noite`;
    }
}

