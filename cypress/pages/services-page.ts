class ServicesPage {
  elements = {
    // for handling different createButtion element type
    createButton: () => {
      return cy.get('body').then(($body) => {
        const button1 = $body.find('[data-testid="toolbar-add-gateway-service"]');
        const button2 = $body.find('[data-testid="empty-state-action"]');
        
        if (button1.length) {
          return cy.wrap(button1);
        } else if (button2.length) {
          return cy.wrap(button2);
        }
      });
    },

    urlInput: () => cy.get('[data-testid="gateway-service-url-input"]'),
    nameInput: () => cy.get('[data-testid="gateway-service-name-input"]'),
    saveButton: () => cy.get('[data-testid="service-create-form-submit"]')
  }

  createService(url: string, name: string) {
    this.elements.createButton().click();

    cy.wait(3000)

    this.elements.urlInput().clear();
    this.elements.urlInput().type(url);
    this.elements.nameInput().clear();
    this.elements.nameInput().type(name);
    this.elements.saveButton().click();
  }
}

export default new ServicesPage();