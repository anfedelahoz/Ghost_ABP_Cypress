class CreatePostPage {
  getPostTitle() {
    return cy.get("textarea");
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
  getThirdPublishButton() {
    return cy.get("button").contains("Publish");
  }
  getMarkdownFormat() {
    return cy.get('[title="Markdown"]');
  }
  getMarkdownText() {
    return cy.get(".CodeMirror-scroll");
  }
  getUrlSelect() {
    return cy.get(".fa-link");
  }
  getButtonFormat() {
    return cy.get('[title="Button"]');
  }
  getButtonText() {
    return cy.get("#button-text-input");
  }
  getButtonUrl() {
    return cy.get("#button-url-input");
  }
  getEmailFormat() {
    return cy.get('[title="Email content"]');
  }
  getEmailText() {
    return cy.get(".koenig-text-replacement-html-input__editor > p");
  }
  getBookmarkFormat() {
    return cy.get('[title="Bookmark"]');
  }
  getBookmarkText() {
    return cy.get(".miw-100");
  }
  getHTMLFormat() {
    return cy.get('[title="HTML"]');
  }
  getHTMLText() {
    return cy.get(".CodeMirror-line");
  }
  getEmailCallFormat() {
    return cy.get('[title="Email call to action"]');
  }
  getEmailCallText() {
    return cy.get(".koenig-text-replacement-html-input__editor");
  }
  getEmailCallButton() {
    return cy.get("#button-toggler");
  }
  getEmailCallButtonTitule() {
    return cy.get("#button-text-input");
  }
  getEmailCallUrl() {
    return cy.get("#button-url-input");
  }
  getCalloutFormat() {
    return cy.get('[title="Callout"]');
  }
  getCalloutText() {
    return cy.get(".koenig-basic-html-input__editor");
  }
  getCalloutColor() {
    return cy.get(".kg-callout-palette-swatch-accent");
  }
  getToggleFormat() {
    return cy.get('[title="Toggle"]');
  }
  getToggleText1() {
    return cy.get(".koenig-basic-html-input__editor");
  }
  getToggleText2() {
    return cy.get(".koenig-basic-html-input__editor");
  }
  getYoutubeText() {
    return cy.get(".miw-100");
  }
  getTwitterFormat() {
    return cy.get('[title="Twitter"]');
  } 
  getTwitterText() {
    return cy.get(".miw-100");
  }

}

export default CreatePostPage;
