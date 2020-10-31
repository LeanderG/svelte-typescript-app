describe('Counter', () => {
    it('increments on button click', () => {
        // mount(App, {
        //     props: {
        //         name: 'World',
        //     },
        // })

        cy.visit('http://localhost:5000')

        cy.get('[data-cy=increment-text]').contains('Button pressed 0 times.')

        cy.get('[data-cy=increment-button]').click().then(() => {
            cy.get('[data-cy=increment-text]').contains('Button pressed 1 time.')
            cy.percySnapshot();
        });
    })
})

describe('Integration test with visual testing', function () {
    it('Loads the homepage', function () {
        // Load the page or perform any other interactions with the app.
        cy.visit('http://localhost:5000');

        // Take a snapshot for visual diffing
        cy.percySnapshot();
    });
});