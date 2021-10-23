import { carousel } from "./index.js";

function printDOM (category){
    //creamos el contenedor de la categoria
    const containerCategory = document.createElement('div');
    containerCategory.className = 'carousel__category';

    //creamos y agregamos elementos al contenedor de la categia
    const h2 =  document.createElement('h2');
    h2.innerText = `${category.name}`;

    const p = document.createElement('p');
    p.innerText = 'Estas son nuestras recomendaciones:';
    
    containerCategory.append(h2, p)

    //creamos el contenedor de los libros
    const contianerBook = document.createElement('div');
    contianerBook.className = 'carousel__book__container';

    //creamos cada libro y lo agregamos al contenedor de los libros
    category.recommendation.forEach(element => {
        const book = document.createElement('div');
        book.className = 'carousel__book';

        const name = element.name;
        const h3 = document.createElement('h3');
        h3.className = 'carousel__book--name'
        h3.innerText = name;

        const url = element.img;
        const img = document.createElement('img');
        img.className = 'carousel__book--img'
        img.src = url;

        const author = element.author;
        const pAuthor = document.createElement('p');
        pAuthor.className = 'carousel__book--autor'
        pAuthor.innerText = `Autor: ${author}`;


        const description = element.description;
        const pDescription = document.createElement('p');
        pDescription.className = 'carousel__book--description'
        pDescription.innerText = description;

        book.append(h3, img, pAuthor, pDescription);
        contianerBook.appendChild(book);
    })  

    //agregamos el contenedor de los libros al contendor de la categoria.
    containerCategory.appendChild(contianerBook);

    //agregamos esta nueva categoria al carrusel
    carousel.appendChild(containerCategory);
}

export {printDOM}