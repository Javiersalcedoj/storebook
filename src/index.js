import { Categorie, categoryFinance, categoryTecnología, categoryHealth, instanceCounter } from "./categorie.js";
import { Book, bookSaludHumana, bookProgramar, bookJavascript, bookInvierte, bookFinanzas, bookAprendeIA} from "./books.js";
import { printDOM } from "./generatorRecommendation.js";
import { chooseAgain, returnCategories, sectionCategories } from "./submit.js";

const main = document.querySelector('.main')

const carousel = document.createElement ('section');
carousel.className = 'carousel';

const cover = document.querySelector('.cover');
cover.addEventListener('click', ()=>{
    const circleAnimationWrite = document.querySelector('.cicle--write')
    circleAnimationWrite.style.display = 'block';
    circleAnimationWrite.style.animation = 'tapWrite 1s';
    setTimeout(()=>{
        circleAnimationWrite.remove();
        cover.remove()
    },450)
})

const formContainer = document.querySelector('.categories__form__container')

function createButtonsCategory () {
    const buttonNodes = []
    for (let i = 0; i < instanceCounter.length; i++) {
        const button = document.createElement('button');
        button.className = 'button';
        button.id = `${instanceCounter[i].name}`;
        button.innerText = `${instanceCounter[i].name}`;
        
        buttonNodes.push(button);
    }
    formContainer.append(...buttonNodes);
};
createButtonsCategory();

let messageError = true;

const categories = document.querySelector('.categories')
categories.addEventListener('click', (event)=>{
    if (event.target.className === "button"){
        const id = event.target.id

        const button = document.querySelector(`#${id}`)
        button.style.background =  '#E3F2FD';

        const index = instanceCounter.findIndex(x => x.name === id)
        printDOM(instanceCounter[index])

        messageError = false;
    }
    if (event.target.className === "categories__button--submit") {
        if (messageError) {
            const pMessageError = document.querySelector('.messageError');
            pMessageError.innerText = '*Seleccione por lo menos una categoría';
            return;
        }
        sectionCategories();
        main.appendChild(carousel);
    }
    if (event.target.className === "categies__button--chooseAgain"){
        returnCategories();
        const pMessageError = document.querySelector('.messageError');
        pMessageError.innerText = '';
        messageError = true;
    }
}) 

export {carousel, messageError}