class SinglePostPage {
  getPostTitle() {
    return cy.get("textarea");
  }
  getPostContent() {
    return cy.get('[data-placeholder="Begin writing your post..."]');
  }
  getPostFormat() {
    return cy.get("#ember243 > button");
  }
  getPostFormatProduct() {
    return cy.get('[title="Begin writing your post..."]');
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

export default SinglePostPage;
