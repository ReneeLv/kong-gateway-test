describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002/workspaces')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link').click();
    cy.get('[data-testid="new-service-1"] > [data-testid="name"] > .cell-wrapper > .content-wrapper > span > b').click();
    cy.get('[data-testid="service-routes"]').click();
    cy.get('[data-testid="toolbar-add-route"]').click();
    cy.get('[data-testid="route-form-name"]').clear('ro');
    cy.get('[data-testid="route-form-name"]').type('route-3');
    cy.get('[data-testid="route-form-tags"]').clear('t');
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').clear('/');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/1');
    cy.get('[data-testid="route-create-form-submit"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link').click();
    cy.get('[data-testid="new-service-1"] > [data-testid="name"] > .cell-wrapper > .content-wrapper > span > b').click();
    cy.get('[data-testid="service-routes"]').click();
    cy.get('[data-testid="toolbar-add-route"]').click();
    cy.get('[data-testid="route-form-name"]').clear('ro');
    cy.get('[data-testid="route-form-name"]').type('route-3');
    cy.get('[data-testid="route-form-tags"]').clear('t');
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').clear('/');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/1');
    cy.get('[data-testid="route-create-form-submit"]').click();
    /* ==== End Cypress Studio ==== */
  })
})