class CreateMemberPage {
  getMembersMenu() {
    return cy.get('[href="#/members/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberButton() {
    return cy.get("a").contains("New member");
  }

  getNewMemberName() {
    return cy.get('[name="name"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberEmail() {
    return cy.get('[name="email"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberNote() {
    return cy.get('[name="note"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberSaveButton() {
    return cy
      .get("span")
      .contains("Save")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text);
      });
  }
}

export default CreateMemberPage;
