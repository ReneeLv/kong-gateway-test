class ServicesPage {
  elements = {
    urlInput: () => cy.get('[data-testid="gateway-service-url-input"]'),
    nameInput: () => cy.get('[data-testid="gateway-service-name-input"]'),
    saveButton: () => cy.get('[data-testid="service-create-form-submit"]')
  }

  createService(url: string, name: string) {
    
    this.elements.urlInput().type(url);
    this.elements.nameInput().type(name);
    this.elements.saveButton().click();
  }
}

export default new ServicesPage();