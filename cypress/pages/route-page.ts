class RoutesPage {
  elements = {
    createButton: () => cy.get('[data-testid="create-route-btn"]'),
    nameInput: () => cy.get('[data-testid="route-name-input"]'),
    pathsInput: () => cy.get('[data-testid="route-paths-input"]'),
    serviceSelect: () => cy.get('[data-testid="route-service-select"]'),
    saveButton: () => cy.get('[data-testid="save-route-btn"]'),
    routeTable: () => cy.get('[data-testid="routes-table"]')
  }

  createRoute(name: string, paths: string[], service: string) {
    this.elements.createButton().click();
    this.elements.nameInput().type(name);
    this.elements.pathsInput().type(paths.join(','));
    this.elements.serviceSelect().select(service);
    this.elements.saveButton().click();
  }
}

export default new RoutesPage();