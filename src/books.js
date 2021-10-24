import{ Categorie ,categoryDesarrolloPersonal , categoryTecnología , categoryMarketing, instanceCounter, categoryEmpresa, categoryBiografías, categoryFinanzas, categoryLiderazgo, categoryPsicología} from "./categorie.js"
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


const abitos_para_ser_millonario = new Book({name: 'Hábitos para ser millonario', author: 'Brian Tracy', description: '¿Por qué algunas personas son más exitosas que otras? El 95 % de todo lo que piensas, sientes, haces y logras es resultado del hábito. Simplificando y organizando las ideas, Brian Tracy, experto en temas de liderazgo, estrategia, creatividad y psicología del éxito, ha escrito magistralmente un libro de obligada lectura sobre hábitos que asegura completamente el éxito personal.', img: './img/Portada.png'})

const como_hacer_que_la_gente_haga_cosas = new Book({name: 'Como hacer que la gente haga cosas', author: 'Robert Conkin', description: 'La clave para convencer, dirigir, motivar, supervisar e influir en los demás',img: './img/Portada.png'})

const yoSteveJobs = new Book({name: 'Yo, Steve Jobs', author: 'George Beahm',  description: 'Sus inspiradoras e innovadoras ideas en sus propias palabras',img: './img/Portada.png'})
const SteveJobs = new Book({name: 'Steve Jobs', author: 'Walter Isaacson',  description: 'La biografía definitiva de steve Jobs. Esta es la única biografía escrita con la colaboración de Jobs',img: './img/Portada.png'})

const four = new Book({name: 'Four', author: 'Scott Galloway', description: 'El adn secreto de Amazon, Apple, Facebook y Google',img: './img/Portada.png'})
const graciasPorLLegarTarde = new Book({name: 'Gracias por llegar tarde', author: 'Thomas L. Friedman', description: 'Como la tecnología, la globalización y el cambio climatico transformaran el mundo en los próximos años',img: './img/Portada.png'})
const innovadoresQueHacenHistoria = new Book({name: 'Innovadores que hacen historia',  author: 'Jim Stengel', description: 'Como las Startups y emprendedores dan vida a las grandes empresas',img: './img/Portada.png'})

const padreRicoPadrePobre_RobertKi = new Book({name: 'Padre Rico, Padre Pobre', author: 'Robert Kiyosaki', description: 'Que les enseñan los ricos a sus hijos acerca del dinero y que los pobre y clase media no!',img: './img/Portada.png'})
const elJuegoDelDinero_RobertKi = new Book({name: 'El juego del dinero', author: 'Robert Kiyosaki', description: 'Por que los inversionistas lentos pierden, y el dinero rápido gana!',img: './img/Portada.png'})
const elToqueDeMidas_RobertKi = new Book({name: 'El toque de midas', author: 'Robert Kiyosaki, Donald Trump', description: 'Por que algunos empresarios se hacen ricos y la mayoría no',img: './img/Portada.png'})

const EstoEsMarketing = new Book({name: 'Esto es Marketing', author: 'Seth Godin', description: 'Un enfoque innovador sobre Marketing, Ventas y Publicidad',img: './img/Portada.png'})
const oceanoAzul = new Book({name: 'La estrategia del Oceano Azul', author: 'W. Chan Kim, Renee Mauborgne', description: 'Un enfoque innovador sobre Marketing, Ventas y Publicidad', img: './img/Portada.png'})

const pensarRapidoPensarDespacio = new Book({name: 'Pensar rapido, Pensar despacio', author: 'Daniel Kahneman', description: 'Este autor ganador del premio Nobel de economía, revela cómo funciona el cerebro y la toma de decisiones',img: './img/Portada.png'})
const elLibroRojo = new Book({name: 'El libro rojo', author: 'C.G Jung', description: 'Durante la Primera Guerra Mundial, Jung comenzó una larga autoexploración que denominó su confrontación con lo inconsciente. Durante este período, desarrolló sus principales teorías de lo inconsciente colectivo, los arquetipos, los tipos psicológicos y el proceso de individuación.',img: './img/Portada.png'})
const loInconciente = new Book({name: 'Lo inconsciente', author: 'C.G Jung', description: 'En una conferencia pronunciada en 1914, un mes antes del estallido de la Gran Guerra, Jung define lo inconsciente como “todos los procesos psíquicos que están bajo el umbral de la conciencia”',img: './img/Portada.png'})
const Propaganda = new Book({name: 'Propaganda', author: 'Edward Bernays', description: 'Como manipular la opinión es democracia', img: './img/Portada.png'})
const elHombreYsusSimbolos = new Book({name: 'El hombre y sus símbolos', author: 'Carl G. Jung', description: 'Estudiar la relevancia de símbolos, nunca ha sido tan importante',img: './img/Portada.png'})

const laExperienciaDelCliente = new Book({name: 'La experiencia del cliente', author: 'Hugo Brunetta', description: 'Este libro es un manual detallado y práctico sobre la administración de la experiencia del cliente desde una perspectiva ciento por ciento real, producto de muchos años de actividad y competencia del autor en consultoría y capacitación. ',img: './img/Portada.png'})
const elEstiloVirgin = new Book({name: 'El estilo Virgin', author: 'Richard Branson', description: 'Escuchar, aprender, reír y liderar. El estilo virgin trae consecuencias impredecibles y nos lleva a lugares donde otros mas sensatos no se aventuran',img: './img/Portada.png'})
const elModeloToyota = new Book({name: 'El modelo Toyota', author: 'Jeffrey K. Liker', description: 'Este es un libro el cual habla sobre una excelente filosofía de gestión, muestra como las empresas de servicios ganan valor',img: './img/Portada.png'})
const nuncaTiresLaToalla = new Book({name: 'Nunca tires la toalla', author: 'Donald Trump', description: 'Como convertí mis mayores desafíos en grandes éxitos',img: './img/Portada.png'})
const equiposExtremos = new Book({name: 'Equipos Extremos', author: 'Robert Bruce Shaw', description: 'Por qué pixar, Airbnb, y otras empresas triunfan donde la mayoría fracasan',img: './img/Portada.png'})



categoryEmpresa.addRecomendation([equiposExtremos, nuncaTiresLaToalla, elModeloToyota, elEstiloVirgin, laExperienciaDelCliente ])
categoryTecnología.addRecomendation([innovadoresQueHacenHistoria, graciasPorLLegarTarde, four ])
categoryBiografías.addRecomendation([SteveJobs, yoSteveJobs])
categoryFinanzas.addRecomendation([padreRicoPadrePobre_RobertKi, elJuegoDelDinero_RobertKi, elToqueDeMidas_RobertKi])
categoryMarketing.addRecomendation([oceanoAzul, EstoEsMarketing])
categoryPsicología.addRecomendation([elHombreYsusSimbolos, Propaganda, loInconciente, elLibroRojo, pensarRapidoPensarDespacio])
categoryLiderazgo.addRecomendation([como_hacer_que_la_gente_haga_cosas])
categoryDesarrolloPersonal.addRecomendation([abitos_para_ser_millonario])

export {Book, abitos_para_ser_millonario, como_hacer_que_la_gente_haga_cosas, elHombreYsusSimbolos, Propaganda, loInconciente, elLibroRojo, pensarRapidoPensarDespacio, oceanoAzul, EstoEsMarketing, padreRicoPadrePobre_RobertKi, elJuegoDelDinero_RobertKi, elToqueDeMidas_RobertKi, SteveJobs, yoSteveJobs, equiposExtremos, nuncaTiresLaToalla, elModeloToyota, elEstiloVirgin, laExperienciaDelCliente, innovadoresQueHacenHistoria, graciasPorLLegarTarde, four}
