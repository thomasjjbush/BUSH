describe('full page', () => {
    beforeEach(() => {
        cy.load();
        cy.removeHeightRestrictions();
    });

    it('should match full page snapshot', () => {
        cy.wait(300);
        cy.matchImageSnapshot('home-page-full', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('home-page-full-light-mode', { capture: 'fullPage' });
    });

    it('should match full page ipad landscape snapshot', () => {
        cy.viewport('ipad-2', 'landscape');
        cy.wait(300);
        cy.matchImageSnapshot('home-page-full-ipad-landscape', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('home-page-full-ipad-landscape-light-mode', { capture: 'fullPage' });
    });

    it('should match full page ipad portrait snapshot', () => {
        cy.viewport('ipad-2', 'portrait');
        cy.wait(300);
        cy.matchImageSnapshot('home-page-full-ipad-portrait', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('home-page-full-ipad-portrait-light-mode', { capture: 'fullPage' });
    });

    it('should match full page iphone x snapshot', () => {
        cy.viewport('iphone-x');
        cy.wait(300);
        cy.matchImageSnapshot('home-page-full-iphone-x', { capture: 'fullPage' });
        cy.lightMode();
        cy.matchImageSnapshot('home-page-full-iphone-x-light-mode', { capture: 'fullPage' });
    });
});
