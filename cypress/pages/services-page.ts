class ServicesPage {
  elements = {
    // 修改选择器 - 使用类名和属性选择器
    createButton: () => cy.get('button.dropdown-item-trigger').first(),
    // 或者使用更具体的选择器
    // createButton: () => cy.get('[data-testid="create-service-button"]'),
    
    // 如果按钮有特定的文本内容
    // createButton: () => cy.contains('button', 'New Service'),
    
    nameInput: () => cy.get('input[placeholder*="Name" i]'),
    urlInput: () => cy.get('input[placeholder*="URL" i]'),
    saveButton: () => cy.get('button').contains(/save|create/i),
    serviceTable: () => cy.get('table').first()
  }

  createService(name: string, url: string) {
    // 先点击下拉触发器
    this.elements.createButton().click();
    
    // 然后从下拉菜单中选择"Service"选项
    cy.contains('.dropdown-menu a', 'Service').click();
    
    // 填写表单
    this.elements.nameInput().type(name);
    this.elements.urlInput().type(url);
    this.elements.saveButton().click();
  }
}

export default new ServicesPage();