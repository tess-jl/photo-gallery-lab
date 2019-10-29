// IMPORT MODULES under test here:
import example from '../src/example.js';

const test = QUnit.test;

// test('time to test a function', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations

//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(true, false);
// });

test('normalizes whitespace', (assert) => {
    // Arrange
    const html = /*html*/`
            <div>
                <span>hello</span>
            </div>
    `;

    const expected = /*html*/`
        <div>
                <span>hello</span>
        </div>
    `;

    // Act
    // now built in as custom assert

    // Assert
    assert.htmlEqual(html, expected);
});
