//function for dynamically rendering the html string

function renderCreatureItem(creature) {
    const html = /*html*/`
    <li class="creature-item">
        <div class="info-container">
                <h2>${creature.title}</h2>
                <p class="creature-type">${creature.keyword}</p>
        </div>
        <div class="image-container">
                <img src="${creature.url}" alt="${creature.title} image">
        </div>
        <p class="num-horns">${creature.horns}</p>
        <p class="description">${creature.description}</p>
    </li>
    `;
    return html;
}

export default renderCreatureItem; 