import ServicesPage from "../pages/services-page";
import RoutesPage from "../pages/routes-page";

// describe('Route Creation', () => {
//   beforeEach(() => {
//     cy.visit('/');
//     // Create a service first
//     ServicesPage.createService('route-test-service', 'http://httpbin.org:80');
//   });

//   it('should create route associated with service', () => {
//     RoutesPage.createRoute('test-route', ['/api'], 'route-test-service');

//     // Verify route creation success
//     cy.contains('Route created successfully').should('be.visible');
//     RoutesPage.elements.routeTable().should('contain', 'test-route');
//   });
// });

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8002/workspaces');


    /* ==== End Cypress Studio ==== */


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.last-row > :nth-child(1)').click();
    cy.get('[data-testid="sidebar-item-routes"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();
    cy.get('[data-testid="empty-state-action"]').click();
    cy.get('[data-testid="route-form-name"]').type('route-new');
    cy.get('[data-testid="route-form-service-id"]').click();
    cy.get('[data-testid="select-item-62b65b7c-de4e-4659-84b0-8b5a1ff6a425"] > .select-item-container > button > [data-v-11bc36aa=""] > .route-form-service-dropdown-item > .select-item-label').click();
    cy.get('[data-testid="route-form-tags"]').type('tag1');
    cy.get('[data-testid="route-form-paths-input-1"]').type('/api/v1');
    cy.get('.expanded-selection-empty').click();
    cy.get('[data-testid="multiselect-item-GET"] > .multiselect-item-container > button > .multiselect-item-label').click();

    cy.get('[data-testid="route-create-form-submit"]').click({ force: true });
    /* ==== End Cypress Studio ==== */

  })
})