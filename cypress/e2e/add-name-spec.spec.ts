describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002/workspaces');
    // /* ==== Generated with Cypress Studio ==== */
    // cy.get('[data-testid="workspace-link-default"]').click();
    // cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display').click();
    // cy.get('[data-testid="empty-state-action"]').click();
    // cy.get('[data-testid="route-form-name"]').type('route-1');
    // cy.get('[data-testid="route-form-service-id"]').click();
    // cy.get('[data-testid="select-item-aa8555f4-8ef9-40e8-bb36-7fe7709af1ec"] > .select-item-container > button > [data-v-11bc36aa=""] > .route-form-service-dropdown-item > .select-item-label').click();
    // cy.get('[data-testid="route-form-tags"]').type('tag1');
    // cy.get('[data-testid="route-form-paths-input-1"]').type('/api/v1');
    // cy.get('[data-testid="route-create-form-submit"]').click();
    // cy.get('[data-testid="id-copy-uuid"] > .copy-container > .k-popover > .popover-trigger-wrapper > [data-testid="copy-to-clipboard"]').click();
    // /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    cy.get('[data-testid="toolbar-add-gateway-service"]').click();
    cy.get('[data-testid="gateway-service-url-input"]').clear('http://httpbin.konghq.com');
    cy.get('[data-testid="gateway-service-url-input"]').type('http://httpbin.konghq.com');
    cy.get('[data-testid="gateway-service-name-input"]').click();
    cy.get('[data-testid="service-create-form-submit"]').click();
    cy.get('[data-testid="service-routes"]').click();
    cy.get('[data-testid="empty-state-action"]').click();
    cy.get('[data-testid="route-form-name"]').clear('ro');
    cy.get('[data-testid="route-form-name"]').type('route-2');
    cy.get('[data-testid="route-form-tags"]').clear('t');
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').clear('/');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/1');
    cy.get('[data-testid="route-create-form-submit"]').click();
    cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    cy.get('[data-testid="toolbar-add-gateway-service"]').click();
    cy.get('[data-testid="gateway-service-url-input"]').clear('http://httpbin.konghq.com');
    cy.get('[data-testid="gateway-service-url-input"]').type('http://httpbin.konghq.com');
    cy.get('[data-testid="gateway-service-name-input"]').click();
    cy.get('[data-testid="service-create-form-submit"]').click();
    cy.get('[data-testid="service-routes"]').click();
    cy.get('[data-testid="empty-state-action"]').click();
    cy.get('[data-testid="route-form-name"]').clear('ro');
    cy.get('[data-testid="route-form-name"]').type('route-2');
    cy.get('[data-testid="route-form-tags"]').clear('t');
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').clear('/');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/1');
    cy.get('[data-testid="route-create-form-submit"]').click();
    cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    /* ==== End Cypress Studio ==== */
  })


})