const chooseAgain = document.createElement('button');
chooseAgain.className = 'categies__button--chooseAgain';
chooseAgain.innerText = 'Elegir de nuevo';



function sectionCategories () {
    const categories = document.querySelector('.categories');

    const h2 = document.querySelector('.categories__h2');
    h2.innerText = `Estas son nuestras recomendaciones según tus intereses.`;

    const form = document.querySelector('.categories__from');
    categories.removeChild(form);

    categories.appendChild(chooseAgain);
}

export {sectionCategories, chooseAgain}