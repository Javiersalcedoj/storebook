import{ categoryFinance, categoryTecnology, categoryHealth} from "./categorie.js"
class Book {
    constructor({name, author, description, img}){
        this.name =  name;
        this.author = author;
        this.description = description;
        this.img  = img;
        this.categories = [];
    }
    addCategoires(el) {
        el.forEach(element => {
            this.categories.push(element)
        });
    }
}

const bookAprendeIA = new Book ({name:'Aprende IA', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'});
const bookProgramar = new Book ({name:'Programar', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'});
const bookJavascript = new Book ({name:'JavaScript', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'});
categoryTecnology.addRecomendation([bookAprendeIA, bookProgramar, bookJavascript]);

const bookInvierte = new Book ({name:'Invierte', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'})
const bookFinanzas = new Book ({name:'Finanzas', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'})
categoryFinance.addRecomendation([bookInvierte, bookFinanzas]);


const bookSaludHumana = new Book ({name:'Salud Humana', author: 'unknown', description: 'here is a description', img: '../img/Portada.png'})
categoryHealth.addRecomendation([bookSaludHumana]);

export {Book, bookSaludHumana, bookProgramar, bookJavascript, bookInvierte, bookFinanzas, bookAprendeIA}