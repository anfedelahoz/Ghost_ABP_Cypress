class DashboardPage {
  getPostsMenu() {
    return cy.get('[href="#/posts/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).click({ force: true });
    });
  }
  getDraftsMenu() {
    return cy.get('[href="#/posts/?type=draft"]');
  }
  getScheduledMenu() {
    return cy.get('[href="#/posts/?type=scheduled"]');
  }
  getPublishedMenu() {
    return cy.get('[href="#/posts/?type=published"]');
  }
  getPagesMenu() {
    return cy.get('[href="#/pages/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).click({ force: true });
    });
  }
  getTagsMenu() {
    return cy.get('[href="#/tags/"]');
  }
  getMembersMenu() {
    return cy.get('[href="#/members/"]');
  }
}
export default DashboardPage;
