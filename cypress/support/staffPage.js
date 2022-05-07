class StaffPage {
  getSettings() {
    return cy.get('[href="#/settings/"]');
  }

  getStaff() {
    return cy.get('[href="#/settings/staff/"]');
  }

  getInviteButton() {
    return cy.get("span").contains("Invite people");
  }

  getContributor() {
    return cy.get("div").contains("Contributor");
  }

  getAuthor() {
    return cy.get("div").contains("Author");
  }

  getEditor() {
    return cy.get("div").contains("Editor");
  }

  getAdministrador() {
    return cy.get("div").contains("Administrador");
  }

  getStaffEmail() {
    return cy.get('[placeholder="youremail@example.com"]');
  }

  getSendButton() {
    return cy.get("span").contains("Send invitation now →");
  }

  //   "youremail@example.com"
}

export default StaffPage;
