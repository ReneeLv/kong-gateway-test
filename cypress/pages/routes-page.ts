class RoutesPage {
  elements = {
    sidebarSelect: () => cy.get('[data-testid="sidebar-item-gateway-services"]'),
    serviceSelect: () => cy.get('[data-testid=${serviceId}] > [data-testid="name"] > .cell-wrapper > .content-wrapper > span > b'),

    selectRoute: () => cy.get('[data-testid="service-routes"]'),
    createButton: () => cy.get('[data-testid="toolbar-add-rout"]'),

    nameInput: () => cy.get('[data-testid="route-form-name"]'),
    tagsInput: () => cy.get('[data-testid="route-form-tags"]'),
    pathInput: () => cy.get('[data-testid="route-form-paths-input-1"]'),

    saveButton: () => cy.get('[data-testid="route-create-form-submit"]'),
  }

  createRoute(name: string, service: string, tags: string[], path: string) {
    this.elements.sidebarSelect().click();
    this.elements.serviceSelect().click();

    this.elements.selectRoute().click();
    this.elements.createButton().click();

    this.elements.nameInput().type(name);
    this.elements.tagsInput().type(tags.join(','));
    this.elements.pathInput().type(path); 

    this.elements.saveButton().click({ force: true });
  }
}

export default new RoutesPage();