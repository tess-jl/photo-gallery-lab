//function for dynamically rendering the html string

function renderCreatureItem() {
    const html = /*html*/`
    <li class="creature-item">
        <div class="info-container">
                <h2>UniWhal</h2>
                <p class="creature-type">narwhal</p>
        </div>
        <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="Uniwhal image">
        </div>
        <p class="num-horns">1</p>
        <p class="description">A unicorn and a narwhal nuzzling their horns</p>
    </li>
    `;
    return html;
}

export default renderCreatureItem; 