/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      createService(url: string, name: string): Chainable<void>;

      createRoute(name: string, service: string, tag: string, paths: string[]): Chainable<void>;

      deleteServiceViaApi(name: string): Chainable<void>;
      
      waitForElement(selector: string, timeout?: number): Chainable<void>;

      selectFromDropdown(dropdownSelector: string, optionText: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('createService', (name: string, url: string) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8001/services',
    body: {
      name,
      url
    }
  });
});

Cypress.Commands.add('deleteServiceViaApi', (name: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8001/services/${name}`,
    failOnStatusCode: false
  });
});

Cypress.Commands.add('waitForElement', (selector: string, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

export {};