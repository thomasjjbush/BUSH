describe('home functional', () => {
    const selectors = {
        input: '[data-test-id="search-input"]',
        projects: '[data-test-id="project"]',
        scroller: '[data-test-id="project-scroller"]',
        selects: {
            client: '[data-test-id="select-client"]',
            order: '[data-test-id="project"]',
        },
        social: {
            github: '[data-test-id="github-icon"]',
            linkedIn: '[data-test-id="linkedin-icon"]',
            whatsApp: '[data-test-id="whatsapp-icon"]',
        },
    };

    const assertions = {
        social: {
            github: 'https://github.com/thomasjjbush',
            linkedIn: 'https://www.linkedin.com/in/thomas-bush-555604161/',
            whatsApp: 'tel:+447501274429',
        },
    };

    beforeEach(() => {
        cy.load();
    });

    describe('client filtering', () => {
        it('user should be able to filter projects by client "Fake client"', () => {
            cy.get(selectors.selects.client).select('Fake client');
            cy.get(selectors.projects).should('have.length', 3);
        });

        it('user should be able to filter projects by client "Made UP"', () => {
            cy.get(selectors.selects.client).select('Made UP');
            cy.get(selectors.projects).should('have.length', 1);
        });

        it('user should be able to filter projects by client "Mock client"', () => {
            cy.get('[data-test-id="select-client"]').select('Mock client');
            cy.get(selectors.projects).should('have.length', 1);
        });

        it('user should be able to filter projects by client "NotREAL"', () => {
            cy.get('[data-test-id="select-client"]').select('NotREAL');
            cy.get(selectors.projects).should('have.length', 2);
        });
    });

    describe('search term filtering', () => {
        it('user should be able to search for project by name', () => {
            cy.get(selectors.input)
                .type('Hagrid')
                .should('have.value', 'Hagrid');
            cy.get(selectors.projects).should('have.length', 1);
        });

        it('user should be able to clear search', () => {
            cy.get(selectors.input)
                .type('Hagrid')
                .clear()
                .should('have.value', '');
        });
    });

    describe('load more', () => {
        it('user should be able to load more projects', () => {
            cy.get(selectors.projects).should('have.length', 4);
            cy.get('[data-test-id="load-more-cta"]').click({ force: true });
            cy.get(selectors.projects).should('have.length', 7);
        });
    });

    describe('navigate to project', () => {
        it('user should be able to navigate to project', () => {
            cy.get(selectors.projects)
                .eq(0)
                .click();
            cy.url().should('eq', 'http://localhost:3000/projects/dobby-is-gd-elf');
        });
    });

    describe('navigate to social platforms', () => {
        it('user should be able to navigate to Github profile', () => {
            cy.get(selectors.social.github)
                .should('have.attr', 'target', '_blank')
                .should('have.attr', 'rel', 'noreferrer')
                .should('have.attr', 'href', assertions.social.github);
        });

        it('user should be able to navigate to Linkedin profile', () => {
            cy.get(selectors.social.linkedIn)
                .should('have.attr', 'target', '_blank')
                .should('have.attr', 'rel', 'noreferrer')
                .should('have.attr', 'href', assertions.social.linkedIn);
        });

        it('user should be able to navigate to WhatsApp profile', () => {
            cy.get(selectors.social.whatsApp)
                .should('have.attr', 'rel', 'noreferrer')
                .should('have.attr', 'href', assertions.social.whatsApp);
        });
    });

    describe('dark mode', () => {
        it('user should be able to toggle dark mode', () => {
            cy.get('#root').should('have.css', 'background-color', 'rgb(26, 26, 26)');
            cy.get('[data-test-id="contrast-button"]').click();
            cy.get('#root').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        });
    });

    describe('ARIA', () => {
        beforeEach(() => {
            cy.injectAxe();
        });

        it('Has no detectable a11y violations on load', () => {
            cy.checkA11y();
        });
    });
});
