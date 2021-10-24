import { infoBook, titleBook } from "./index.js";

function generatorInfoBook(book) {
    //creamos y agg div contenedor
    const divContainer = document.createElement('div');
    divContainer.className = 'infoBook__container';
    infoBook.appendChild(divContainer);

    //creamor y agg div de contenido
    const divContent = document.createElement('div');
    divContent.className = 'infoBook__container__content';
    divContainer.appendChild(divContent);

    //creamos el contenido y lo agg
    titleBook.innerText = book.name;

    const pAuthor = document.createElement('p');
    pAuthor.className = 'content--author';
    pAuthor.innerText = book.author;

    const h4 = document.createElement('h4');
    h4.className = 'content--description';
    h4.innerText = 'Descripción';

    const pDescription = document.createElement('p');
    pDescription.className = 'content--p';
    pDescription.innerText = book.description;

    const button = document.createElement('button');
    button.className = 'content--button';
    button.innerText = 'Comprar'

    divContent.append(titleBook, pAuthor, h4, pDescription, button);

    //lo agg al main 
    const main = document.querySelector('.main')
    main.appendChild(infoBook);
}
export {generatorInfoBook, infoBook};