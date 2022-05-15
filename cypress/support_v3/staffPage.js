class StaffPage {
  getStaff() {
    return cy.get('[href="#/staff/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getInviteButton() {
    return cy.get("span").contains("Invite people");
  }

  getDropDown() {
    return cy.get("#new-user-role");
  }

  getContributor() {
    return cy.get("option").contains("Contributor");
  }

  getAuthor() {
    return cy.get("option").contains("Author");
  }

  getEditor() {
    return cy.get("option").contains("Editor");
  }

  getAdministrador() {
    return cy.get("option").contains("Administrador");
  }

  getStaffEmail() {
    return cy.get('[placeholder="Email Address"]');
  }

  getSendButton() {
    return cy.get("span").contains("Send invitation now");
  }

  //   "youremail@example.com"
}

export default StaffPage;
