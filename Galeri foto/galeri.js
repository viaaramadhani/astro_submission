const container = document.querySelector('.container');
const cardContainer = document.querySelector('.card__container');
const articles = document.querySelectorAll('.card__article');

let counter = 0;
const articleWidth = articles[0].offsetWidth;

document.querySelector('.card__button').addEventListener('click', function() {
    counter++;
    if (counter >= articles.length) {
        counter = 0;
    }
    updateContainer();
});

function updateContainer() {
    cardContainer.style.transform = `translateX(${-counter * articleWidth}px)`;
}