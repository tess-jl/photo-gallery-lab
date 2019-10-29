import renderCreatureItem from '../home/render-creature-item.js';
const test = QUnit.test;

QUnit.module('Render Creature Item');

test('renders html from data', assert => {
    // arrange
    const expected = /*html*/`
    
    <li class="photo-item">
        <div class="info-container">
            <h2>Title</h2>
            <p class="creature-type">creature type</p>
        </div>

        <div class="image-container">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="creature-image">
        </div>
        <p class="num-horns">Number of horns</p>
        <p class="description">description</p>
    </li>
    `;

    // act
    const html = renderCreatureItem();
    
    // assert
    assert.htmlEqual(html, expected);
});