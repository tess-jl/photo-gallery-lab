import renderCreatureItem from './render-creature-item.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

const creatureItemListDOM = document.querySelector('.creatures');
const creatureTypeFilter = document.querySelector('.creature-type-filter');


function render(images) {
    // remove any existing list items
    while (creatureItemListDOM.lastElementChild) {
        creatureItemListDOM.lastElementChild.remove();
    }

    // render new list items
    images.forEach(creature => {
        const html = renderCreatureItem(creature);
        const convertedToDOM = htmlToDOM(html);
        creatureItemListDOM.appendChild(convertedToDOM);
    });
    
}


render(images);

creatureTypeFilter.addEventListener('change', () => {

    const filter = creatureTypeFilter.value;
    let filteredCreatures = null;

    if (!filter) {
        filteredCreatures = images;
    }
    else {
        filteredCreatures = images.filter(creature => {
            return creature.keyword === filter;
        });
    }

    render(filteredCreatures);
});
