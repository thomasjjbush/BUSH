import 'cypress-axe';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add('multipleClick', (selector, { times }) => {
    for (let i = 0; i < times; i++) {
        cy.get(selector).click();
    }
});

Cypress.Commands.add('removeHeightRestrictions', () => {
    cy.get('body').invoke('attr', 'style', 'height: auto !important; overflow: auto !important;');
    cy.get('html').invoke('attr', 'style', 'height: auto !important; overflow: auto !important;');
});

Cypress.Commands.add('load', (route, { awaitRequests = false } = {}) => {
    if (awaitRequests) {
        cy.intercept({ method: 'POST', url: 'development' }).as('contentful');
        cy.visit(`http://localhost:3000/${route ? route : ''}`);
        cy.wait('@contentful');
        cy.get('[data-test-id="loading"]').should('not.exist');
    } else {
        cy.visit(`http://localhost:3000/${route ? route : ''}`);
    }
});

Cypress.Commands.add('lightMode', () => {
    cy.get('[data-test-id="contrast-button"]')
        .click()
        .blur();
});
