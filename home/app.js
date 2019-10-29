import renderCreatureItem from './render-creature-item.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

//reference the target parent element
const creatureItemListDOM = document.querySelector('.creatures');

//call forEach on the array of images, passing a callback function 
// for each image, Convert image object to html using template
// Convert html to DOM using htmlToDOM
// Append to list parent (<ul>)

images.forEach(creature => {
    const html = renderCreatureItem(creature);
    const convertedToDOM = htmlToDOM(html);


    creatureItemListDOM.appendChild(convertedToDOM);
});