import ServicesPage from "../pages/services-page";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002/workspaces');

    cy.get('.workspace-name').click();
    cy.get('[data-testid="sidebar-item-gateway-services"] > .sidebar-item-link > .sidebar-item-display > .sidebar-item-name-container > .sidebar-item-name').click();

    ServicesPage.createService('http://httpbin.konghq.com', 'new-service-1');

  })
})