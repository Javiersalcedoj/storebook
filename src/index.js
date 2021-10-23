import { Categorie, categoryFinance, categoryTecnology, categoryHealth } from "./categorie.js";
import { Book, bookSaludHumana, bookProgramar, bookJavascript, bookInvierte, bookFinanzas, bookAprendeIA} from "./books.js";
import { printDOM } from "./generatorRecommendation.js";
import { chooseAgain, sectionCategories } from "./submit.js";

const main = document.querySelector('.main')

const carousel = document.createElement ('section');
carousel.className = 'carousel';

const header = document.querySelector('.header');
header.addEventListener('click', ()=>{
    header.remove()
})

const validation = {
    Submit: false,
    Tecnology: false,
    Health: false,
    Finance: false, 
}

const buttonTecnology = document.querySelector('.categies__button--tecnolgy');
buttonTecnology.addEventListener('click', ()=>{
    if (validation.Tecnology === false) {
        buttonTecnology.style.background =  '#E3F2FD';
        printDOM(categoryTecnology)
        validation.Tecnology = true;
        validation.Submit = true;
    }
})

const buttonFinance = document.querySelector('.categies__button--finance');
buttonFinance.addEventListener('click', ()=>{
    if (validation.Finance === false) {
        buttonFinance.style.background =  '#E3F2FD';
        printDOM(categoryFinance)
        validation.Finance = true;
        validation.Submit = true;
    }
})

const buttonHealth = document.querySelector('.categies__button--health');
buttonHealth.addEventListener('click', ()=>{
    if (validation.Health === false) {
        buttonHealth.style.background =  '#E3F2FD';
        printDOM(categoryHealth);
        validation.Health = true;
        validation.Submit = true;
    }
});

const buttonSubmit = document.querySelector('.categories__button--submit')
buttonSubmit.addEventListener('click', ()=> {
    if (validation.Submit === false) {
        const messageError = document.querySelector('.messageError');
        messageError.innerText = '*Seleccione por lo menos una categoría';
        return;
    }
    sectionCategories();
    main.appendChild(carousel);
});

chooseAgain.addEventListener('click', ()=>{
    location.reload();
});

export {carousel}