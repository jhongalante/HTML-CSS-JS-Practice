var cards = document.querySelectorAll("[id^='card-']");
var board = document.getElementById('board');
var cont = 1;
var cartaVirada1;
var score = 0;
document.getElementById('score').innerHTML = score;
Array.from(cards).forEach(card => {
    card.addEventListener('click', function () {
        switch (card.dataset.dog) {
            case 'dog-1':
                card.src = 'img/dog1.jpg';
                break;
            case 'dog-2':
                card.src = 'img/dog2.jpg';
                break;
            case 'dog-3':
                card.src = 'img/dog3.jpg';
                break;
            case 'dog-4':
                card.src = 'img/dog4.jpg';
                break;
            case 'dog-5':
                card.src = 'img/dog5.jpg';
                break;
            case 'dog-6':
                card.src = 'img/dog6.jpg';
                break;
            case 'dog-7':
                card.src = 'img/dog7.jpg';
                break;
        }
    })
});



embaralharCartas();
document.addEventListener('click', verificarCarta);


function verificarCarta(e) {
    console.log(e);
    console.log(cont);
    if (e.target.className === 'card') {

        if (cont < 2) {
            cartaVirada1 = e.target;
            console.log(cartaVirada1.id);
            cont++;
        } else if (cont == 2) {
            if (cartaVirada1.id !== e.target.id) {

                if (cartaVirada1.dataset.dog == e.target.dataset.dog) {
                    console.log('Acertou!');
                    score++;
                    document.getElementById('score').innerHTML = score;
                    if (score === 7) {
                        document.getElementById('sound-clap').play();
                        setTimeout(function () {
                            alert('Você ganhou!');
                            score = 0;
                            embaralharCartas();
                            document.getElementById('score').innerHTML = score;
                            Array.from(cards).forEach(card => {
                                card.src = "img/card.jpg";
                            })
                        }, 1000);
                    }
                } else {
                    setTimeout(function () {
                        cartaVirada1.src = 'img/card.jpg';
                        e.target.src = "img/card.jpg";
                    }, 600);
                }
                cont = 1;
            }
        }
    }
}


function embaralharCartas() {
    Array.from(cards).forEach(card => {
        card.style.order = (Math.round((Math.random() * 14) + 1));
    });
}