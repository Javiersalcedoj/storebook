const instanceCounter = [];


class Categorie {
    constructor({name, topics}) {
        this.name = name;
        this.topis = topics;
        this.recommendation = [];

        if (name) {
            instanceCounter.push(this);
        }
    }
    addRecomendation(el) {
        el.forEach(element => {
            this.recommendation.push(element)
        })
    }
}

const categoryEmpresa = new Categorie({name :'Empresa', topics: ['Emprendimiento','start-ups','Servicios','Gestión']});
const categoryBiografías = new Categorie({name :'Biografías', topics: ['Aprendizaje','Historias','Conciencia','Inspiración','Mentes brillantes']});
const categoryFinanzas = new Categorie({name :'Finanzas', topics: ['Dinero','Inversionistas','Riqueza','Libertad financiera']});
const categoryLiderazgo = new Categorie({name :'Liderazgo', topics: ['Principios','Networking','Cambios positivos','Coaching','Resistencia','Desafíos']});
const categoryPsicología = new Categorie({name :'Psicologia', topics: ['Pensamiento','Entendimiento personal','Descubrimiento','Simbologías']});
const categoryMarketing = new Categorie({name :'Marketing', topics: ['Ventas','Publicidad','Innovación','Entendimiento humano','Creación de oportunidades']});
const categoryTecnología = new Categorie({name :'Tecnología', topics: ['Tecnología','Globalización','Start-ups','Empresas influyentes','Innovación','Ideas']});
const categoryDesarrolloPersonal = new Categorie({name :'DesarrolloPersonal', topics: ['Aventura','Aprendizaje','Cambio de vida']});

export {Categorie ,categoryDesarrolloPersonal , categoryTecnología , categoryMarketing, instanceCounter, categoryEmpresa, categoryBiografías, categoryFinanzas, categoryLiderazgo, categoryPsicología}