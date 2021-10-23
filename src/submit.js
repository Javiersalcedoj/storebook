import { carousel, messageError } from "./index.js";

const chooseAgain = document.createElement('button');
chooseAgain.className = 'categies__button--chooseAgain';
chooseAgain.innerText = 'Elegir de nuevo';

const categories = document.querySelector('.categories');
const h2 = document.querySelector('.categories__h2');
const form = document.querySelector('.categories__form');

let contentForm;

function sectionCategories () {
    h2.innerText = `Estas son nuestras recomendaciones según tus intereses.`;

    contentForm = form.innerHTML;
    form.innerHTML = "";

    categories.appendChild(chooseAgain);
}

function returnCategories () {
    h2.innerText = "Escoja las categorías que te puedan interesar";
    chooseAgain.remove();

    form.innerHTML = contentForm;

    const button = document.querySelectorAll('.button')
    const buttonArray = [...button]
    buttonArray.forEach((element) => {
        element.style.background =  '#fff';
    })

    carousel.innerHTML = "";
    carousel.remove();
}
export {sectionCategories, chooseAgain, returnCategories}