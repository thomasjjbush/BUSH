describe('full page', () => {
    beforeEach(() => {
        cy.load('projects/mad-hagrid', { awaitRequests: true });
        cy.removeHeightRestrictions();
        cy.wait(500);
    });

    it('should match full page snapshot', () => {
        cy.matchImageSnapshot('project-page-full', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('project-page-full-light-mode', { capture: 'fullPage' });
    });

    it('should match full page ipad landscape snapshot', () => {
        cy.viewport('ipad-2', 'landscape');
        cy.matchImageSnapshot('project-page-full-ipad-landscape', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('project-page-full-ipad-landscape-light-mode', { capture: 'fullPage' });
    });

    it('should match full page ipad portrait snapshot', () => {
        cy.viewport('ipad-2', 'portrait');
        cy.matchImageSnapshot('project-page-full-ipad-portrait', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('project-page-full-ipad-portrait-light-mode', { capture: 'fullPage' });
    });

    it('should match full page iphone x snapshot', () => {
        cy.viewport('iphone-x');
        cy.matchImageSnapshot('project-page-full-iphone-x', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('project-page-full-iphone-x-light-mode', { capture: 'fullPage' });
    });
});

describe('hero', () => {
    beforeEach(() => {
        cy.load('projects/mad-hagrid', { awaitRequests: true });
    });

    it('should match hero-nav snapshot', () => {
        cy.get('[data-test-id="scroller"]').scrollTo('bottom');
        cy.wait(500);
        cy.matchImageSnapshot('project-page-hero-nav');
        cy.lightMode();
        cy.matchImageSnapshot('project-page-hero-nav-light-mode');
    });
});
