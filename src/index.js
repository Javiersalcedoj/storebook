import { Categorie, categoryFinance, categoryTecnology, categoryHealth } from "./categorie.js";
import { Book, bookSaludHumana, bookProgramar, bookJavascript, bookInvierte, bookFinanzas, bookAprendeIA} from "./books.js";
import { printDOM } from "./generatorRecommendation.js";
import { chooseAgain, sectionCategories } from "./submit.js";

const main = document.querySelector('.main')

const carousel = document.createElement ('section');
carousel.className = 'carousel';

const buttonTecnology = document.querySelector('.categies__button--tecnolgy');
buttonTecnology.addEventListener('click', ()=>{
    buttonTecnology.style.background =  'grey';
    printDOM(categoryTecnology)
})

const buttonFinance = document.querySelector('.categies__button--finance');
buttonFinance.addEventListener('click', ()=>{
    buttonFinance.style.background =  'grey';
    printDOM(categoryFinance)
})

const buttonHealth = document.querySelector('.categies__button--health');
buttonHealth.addEventListener('click', ()=>{
    buttonHealth.style.background =  'grey';
    printDOM(categoryHealth);
});

const buttonSubmit = document.querySelector('.categories__button--submit')
buttonSubmit.addEventListener('click', ()=> {
    sectionCategories();
    main.appendChild(carousel);
});

chooseAgain.addEventListener('click', ()=>{
    location.reload();
});

export {carousel}