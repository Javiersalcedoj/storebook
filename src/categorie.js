const instanceCounter = [];

class Categorie {
    constructor({name, topics}) {
        this.name = name;
        this.topis = topics;
        this.recommendation = [];

        if (name) {
            instanceCounter.push(this.name);
        }
    }
    addRecomendation(el) {
        el.forEach(element => {
            this.recommendation.push(element)
        })
    }
}
const categoryTecnology = new Categorie ({name: 'Tecnologia', topics: ['ia', 'web']});
const categoryFinance = new Categorie ({name: 'Finanzas', topics: ['inversiones', 'emprendemiento']});
const categoryHealth = new Categorie ({name: 'Salud', topics: ['salud humana', 'bienestar']});

export {Categorie, categoryFinance, categoryTecnology, categoryHealth, instanceCounter}