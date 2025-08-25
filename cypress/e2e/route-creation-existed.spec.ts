describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8002/workspaces');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    cy.get('[data-testid="toolbar-add-route"]').click();
    cy.get('[data-testid="route-form-name"]').type('route-existed');
    cy.get('[data-testid="route-form-service-id"]').click();
    cy.get('[data-testid="select-item-1442c1a0-2987-4156-b83a-28e9dfd2ba87"] > .select-item-container > button > [data-v-11bc36aa=""] > .route-form-service-dropdown-item > .select-item-description').click();
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/v1');
    cy.get('.expanded-selection-empty').click();
    cy.get('[data-testid="multiselect-item-GET"] > .multiselect-item-container > button > .multiselect-item-label').click();
    cy.get('.kong-ui-entity-base-form').click();

    cy.get('[data-testid="route-create-form-submit"]').click({ force: true });

    /* ==== End Cypress Studio ==== */

  })
})