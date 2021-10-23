class Categorie {
    constructor({name, topics}) {
        this.name = name;
        this.topis = topics;
        this.recommendation = [];
    }
    addRecomendation(el) {
        el.forEach(element => {
            this.recommendation.push(element)
        })
    }
    printRecomendation(){
        console.group(`${this.name} Categorie`)
        this.recommendation.forEach(element =>{
            element.printBook();
        })
        console.groupEnd()
    }
}
const categoryTecnology = new Categorie ({name: 'Tecnologia', topics: ['ia', 'web']});
const categoryFinance = new Categorie ({name: 'Finanzas', topics: ['inversiones', 'emprendemiento']});
const categoryHealth = new Categorie ({name: 'Salud', topics: ['inversiones', 'emprendemiento']});

export {Categorie, categoryFinance, categoryTecnology, categoryHealth}