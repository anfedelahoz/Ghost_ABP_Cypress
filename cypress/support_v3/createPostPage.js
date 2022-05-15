class CreatePostPage {
  getPostTitle() {
    return cy.get("textarea").then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }
  getPostContent() {
    return cy.get('[data-placeholder="Begin writing your post..."]');
  }
  getPostFormat() {
    return cy.get(".koenig-plus-menu-button > .w4");
  }
  getPostFormatProduct() {
    return cy.get('[title="Begin writing your post..."]');
  }

  getPostAccessDropDown() {
    return cy.get("select");
  }

  getYoutubeFormat() {
    return cy.get('[title="YouTube"]');
  }
  getYoutubeUrl() {
    return cy.get('[placeholder="Paste URL to add embedded content..."]');
  }

  getProductFormat() {
    return cy.get('[title="Product"]');
  }

  getPostSettings() {
    return cy.get(".settings-menu-toggle > span");
  }
  getFirstPublishButton() {
    return cy.get("span").contains("Publish");
  }
  getSecondPublishButton() {
    return cy.get("button > span").contains("Publish");
  }
}

export default CreatePostPage;
