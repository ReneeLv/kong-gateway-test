import ServicesPage from "../pages/services-page";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002/workspaces');
  })


  it('service', function() {

    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();

    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="empty-state-action"]').length) {
        cy.get('[data-testid="empty-state-action"]').click();
      } else if ($body.find('[data-testid="toolbar-add-gateway-service"]').length) {
        cy.get('[data-testid="toolbar-add-gateway-service"]').click();
      } else {
        throw new Error('No button found');
      }
    });

    ServicesPage.createService('http://httpbin.konghq.com', 'new-service-1');

  });
})