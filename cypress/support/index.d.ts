/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        lightMode(): void;
        load(route?: string, options?: { awaitRequests: boolean }): void;
        matchImageSnapshot(name?: string, options?: { capture?: string }): void;
        multipleClick(selector, { times }: { times: number }): void;
        removeHeightRestrictions(): void;
    }
}
