const chooseAgain = document.createElement('button');
chooseAgain.className = 'categies__button--chooseAgain';
chooseAgain.innerText = 'Elegir de nuevo';
chooseAgain.style = `margin-top: 10px; margin-right: 5px; padding: 3px; border: 1px solid grey; border-radius: 5px; background: rgb(155, 118, 189);`


function sectionCategories () {
    const categories = document.querySelector('.categories');

    const h2 = document.querySelector('.categories__h2');
    h2.innerText = `Estas son nuestras recomendaciones`;

    const form = document.querySelector('.categories__from');
    categories.removeChild(form);

    categories.appendChild(chooseAgain);
}

export {sectionCategories, chooseAgain}