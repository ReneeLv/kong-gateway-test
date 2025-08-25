import './commands';

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver')) {
    return false;
  }
  return true;
});

beforeEach(() => {
  cy.visit('/');
  cy.get('body', { timeout: 10000 }).should('be.visible');
  
  cy.get('body').then(($body) => {
    if ($body.find('.alert-warning, .notification-warning, [data-testid*="license"]').length) {
      cy.get('button').contains(/dismiss|close|got it/i, { matchCase: false }).click();
    }
  });
});