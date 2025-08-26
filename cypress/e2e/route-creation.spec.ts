import RoutesPage from "../pages/routes-page";

describe('template spec', () => {
  it('passes', () => {

    cy.visit('http://localhost:8002/workspaces');

    /* ==== Generated with Cypress Studio ==== */
    // cy.get('.workspace-name').click();
    // cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();

    // cy.get('body').then(($body) => {
    //   if ($body.find('[data-testid="empty-state-action"]').length) {
    //     cy.get('[data-testid="empty-state-action"]').click();
    //   } else if ($body.find('[data-testid="toolbar-add-route"]').length) {
    //     cy.get('[data-testid="toolbar-add-route"]').click();
    //   } else {
    //     throw new Error('No button found');
    //   }
    // });

    // cy.get('[data-testid="route-form-name"]').type('route-existed');
    // cy.get('[data-testid="route-form-service-id"]').click();

    // cy.get('body').then(($body) => {
    //   if ($body.find('[data-testid="route-form-service-id"]').length) {
    //     cy.get('[data-testid="route-form-service-id"]').click();
    //   } else if ($body.find('[data-testid="no-search-results"]').length) {
    //     cy.get('[data-testid="no-search-results"]').click();
    //     throw new Error('No existing gateway service results found');
    //   } else {
    //     throw new Error('No result found');
    //   }
    // });

    // cy.get('[data-testid="select-item-${serviceId}"] > .select-item-container > button > [data-v-11bc36aa=""] > .route-form-service-dropdown-item > .select-item-description').click();
    // cy.get('[data-testid="route-form-tags"]').type('tag1');
    // cy.get('[data-testid="route-form-paths-input-1"]').type('/api/v1');
    // cy.get('.expanded-selection-empty').click();
    // cy.get('[data-testid="multiselect-item-GET"] > .multiselect-item-container > button > .multiselect-item-label').click();
    // cy.get('.kong-ui-entity-base-form').click();

    // cy.get('[data-testid="route-create-form-submit"]').click({ force: true });

    cy.get('.workspace-name').click();
    
    RoutesPage.createRoute('route-1', 'new-service-1', ['tag1','tag2'], '/api/v1')

    /* ==== End Cypress Studio ==== */
  })
})