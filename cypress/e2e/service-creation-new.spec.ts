describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8002/workspaces');


    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    // cy.get('[data-testid="toolbar-add-gateway-service"]').click();
    cy.get('[data-testid="empty-state-action"]').click();
    // cy.get('#v-111').click();
    cy.get('[data-testid="gateway-service-url-input"]').click();
    cy.get('[data-testid="gateway-service-url-input"]').type('http://httpbin.konghq.com');
    // cy.get('[data-testid="gateway-service-name-input"]').click();
    // cy.get('[data-testid="gateway-service-name-input"]').type('new-service-20250826085538705');
    cy.get('[data-testid="service-create-form-submit"]').click();
    /* ==== End Cypress Studio ==== */
  })
})