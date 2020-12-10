describe('project functional', () => {
    beforeEach(() => {
        cy.load('projects/mad-hagrid');
    });

    describe('navigation', () => {
        it('user should be able to navigate to home page via the B logo', () => {
            cy.get('[alt="BUSH"]').click();
            cy.url().should('eq', 'http://localhost:3000/');
        });
    });

    describe('hero', () => {
        it('user should be able to shrink hero height on scroll', () => {
            cy.get('[data-test-id="hero"]').should('have.attr', 'style', 'height: 40vh;');
            cy.get('[data-test-id="scroller"]').scrollTo('bottom', { duration: 1000 });
            cy.get('[data-test-id="hero"]').should('have.attr', 'style', 'height: 0vh; min-height: 54px;');
        });

        it('user should be able to shrink hero height on rapid scroll', () => {
            cy.get('[data-test-id="hero"]').should('have.attr', 'style', 'height: 40vh;');
            cy.get('[data-test-id="scroller"]').scrollTo('bottom');
            cy.get('[data-test-id="hero"]').should('have.attr', 'style', 'height: 0vh; min-height: 54px;');
        });
    });

    describe('gallery', () => {
        it('user should be able to go to the end and start of the carousel', () => {
            cy.removeHeightRestrictions();
            cy.get('[data-test-id="carousel"]').scrollIntoView();
            cy.multipleClick('[data-test-id="right-icon"]', { times: 3 });
            cy.get('[data-test-id="right-icon"]').should('have.attr', 'disabled');
            cy.multipleClick('[data-test-id="left-icon"]', { times: 3 });
            cy.get('[data-test-id="left-icon"]').should('have.attr', 'disabled');
        });
    });

    describe('responsibilities', () => {
        it('user should be able to view more text when available', () => {
            cy.removeHeightRestrictions();
            cy.get('[data-test-id="responsibilities"]').scrollIntoView();
            cy.get('[data-test-id="responsibility"]').each(item => {
                if (item.find('button').length) {
                    const originalHeight = item.outerHeight();
                    item.find('button').trigger('click');
                    expect(item.outerHeight() > originalHeight);
                }
            });
        });
    });

    describe('similar', () => {
        it('user should be able to navigate to another project for a shared client', () => {
            cy.removeHeightRestrictions();
            cy.get('[data-test-id="similar-dobby-is-gd-elf"]')
                .scrollIntoView()
                .click();
            cy.url().should('eq', 'http://localhost:3000/projects/dobby-is-gd-elf');
        });

        it('user should be able to navigate to another project for a shared primary tag tag', () => {
            cy.removeHeightRestrictions();
            cy.get('[data-test-id="similar-f-l-e-x"]')
                .scrollIntoView()
                .click();
            cy.url().should('eq', 'http://localhost:3000/projects/f-l-e-x');
        });
    });

    describe('ARIA', () => {
        beforeEach(() => {
            cy.load('projects/mad-hagrid', { awaitRequests: true });
            cy.injectAxe();
        });

        it('Has no detectable a11y violations on load', () => {
            cy.checkA11y();
        });
    });
});
