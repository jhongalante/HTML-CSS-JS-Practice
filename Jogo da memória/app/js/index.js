var cards = document.getElementsByClassName('card');
var board = document.getElementById('board');



Array.from(cards).forEach(card => {
    card.addEventListener('click', function () {
        console.log(card.alt);
        switch (card.alt) {
            case 'card-1':
                card.src = 'img/dog1.jpg';
                break;
            case 'card-2':
                card.src = 'img/dog2.jpg';
                break;
            case 'card-3':
                card.src = 'img/dog3.jpg';
                break;
            case 'card-4':
                card.src = 'img/dog4.jpg';
                break;
            case 'card-5':
                card.src = 'img/dog5.jpg';
                break;
            case 'card-6':
                card.src = 'img/dog6.jpg';
                break;
            case 'card-7':
                card.src = 'img/dog7.jpg';
                break;
        }
    })
});