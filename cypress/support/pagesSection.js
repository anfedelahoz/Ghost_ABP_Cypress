class PagesSection {
  getPageMenu() {
    return cy.get('[href="#/pages/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }
  getNewPageButton() {
    return cy.get("span").contains("New page");
  }
  // getNewPageButton() {
  //   return cy.get('[href="#/editor/page/"]').then(($text) => {
  //     var text = $text.get(0);
  //     cy.wrap(text).click({ force: true });
  //   });
  // }
  getPageTitle() {
    return cy.get("textarea").then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }
  getPageContent() {
    return cy
      .get('[data-placeholder="Begin writing your page..."]')
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text);
      });
  }
  getFirstPublishButton() {
    return cy.get("span").contains("Publish");
  }
  getSecondPublishButton() {
    return cy.get("button > span").contains("Publish");
  }
  getThirdPublishButton() {
    return cy.get("button").contains("Publish");
  }
}

export default PagesSection;
