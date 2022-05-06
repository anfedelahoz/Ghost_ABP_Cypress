class DashboardPage {
  getPostsMenu() {
    return cy.get("#ember26");
  }
  getDraftsMenu() {
    return cy.get("#ember46");
  }
  getScheduledMenu() {
    return cy.get("#ember47");
  }
  getPublishedMenu() {
    return cy.get("#ember48");
  }
  getPagesMenu() {
    return cy.get("#ember28");
  }
  getTagsMenu() {
    return cy.get("#ember29");
  }
  getMembersMenu() {
    return cy.get("#member30");
  }
}
export default DashboardPage;
