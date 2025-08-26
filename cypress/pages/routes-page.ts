class RoutesPage {
  elements = {
    sidebarSelect: () => cy.get('[data-testid="sidebar-item-gateway-services"]'),
    serviceSelect: (serviceId: string) => cy.get('[data-testid=${serviceId}] > [data-testid="name"] > .cell-wrapper > .content-wrapper > span > b'),

    selectRoute: () => cy.get('[data-testid="service-routes"]'),
    // createButton: () => cy.get('[data-testid="toolbar-add-rout"]'),

    // for handling different createButtion element type
    createButton: () => {
      return cy.get('body').then(($body) => {
        const button1 = $body.find('[data-testid="toolbar-add-route"]');
        const button2 = $body.find('[data-testid="empty-state-action"]');
        
        if (button1.length) {
          return cy.wrap(button1);
        } else if (button2.length) {
          return cy.wrap(button2);
        }
      });
    },

    nameInput: () => cy.get('[data-testid="route-form-name"]'),
    tagsInput: () => cy.get('[data-testid="route-form-tags"]'),
    pathInput: () => cy.get('[data-testid="route-form-paths-input-1"]'),

    saveButton: () => cy.get('[data-testid="route-create-form-submit"]'),
  }

  serviceSelect(serviceId: string) {
    return cy.get(`[data-testid="${serviceId}"] > [data-testid="name"] > .cell-wrapper > .content-wrapper > span > b`);
  }

  createRoute(name: string, serviceId: string, tags: string[], path: string) {
    this.elements.sidebarSelect().click();
    this.serviceSelect(serviceId).click();

    this.elements.selectRoute().click();
    this.elements.createButton().click();

    this.elements.nameInput().type(name);
    this.elements.tagsInput().type(tags.join(','));
    this.elements.pathInput().type(path); 

    this.elements.saveButton().click({ force: true });
  }
}

export default new RoutesPage();