import { Categorie, categoryFinance, categoryTecnología, categoryHealth, instanceCounter } from "./categorie.js";
import { Book, bookSaludHumana, bookProgramar, bookJavascript, bookInvierte, bookFinanzas, bookAprendeIA} from "./books.js";
import { printDOM } from "./generatorRecommendation.js";
import { chooseAgain, returnCategories, sectionCategories } from "./submitYRestore.js";
import { generatorInfoBook } from "./generatorInfoBook.js";

const main = document.querySelector('.main')

const carousel = document.createElement ('section');
carousel.className = 'carousel';

//se crea el evento del cover inial y su animacion
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

//se crean los botones de las categorias
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

//se crea el evento de los botones de las categorias, el de sudmit y el de volver atras
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

//se crea el evento del carrusel de los libros para poder ver mas info

carousel.addEventListener('click', (event)=>{
    if(event.target.className === "carousel__book--img"){
        const id = event.target.id;
        const info = id.split('-');
        const indexCategory = instanceCounter.findIndex(x => x.name === info[0]);

        const book = instanceCounter[indexCategory].recommendation[info[1]];

        carousel.style.filter = 'blur(3px)';
        categories.style.filter = 'blur(3px)';

        generatorInfoBook(book)
    }
})

//eventos para salir de infoBook y comprar
const infoBook = document.createElement('section');
infoBook.className = 'infoBook';

const titleBook = document.createElement('h3');
titleBook.className = 'content--title';

infoBook.addEventListener('click', (event) => {
    if(event.target.className === "infoBook") {
        infoBook.innerHTML = "";
        infoBook.remove();
        carousel.style.filter = 'none';
        categories.style.filter = 'none';
    }
    if(event.target.className === "content--button") {
        const titleBookcontent = titleBook.innerText;
        const urlComplement = titleBookcontent.replaceAll(" ", "-");
        
        const URL = `https://www.amazon.com/s?k=${urlComplement}`;
        window.open(URL);
    }
})
export {carousel, messageError, infoBook, titleBook}