class ProfilePage {
  getFullName() {
    return cy.get("#user-name");
  }

  getSlug() {
    return cy.get("#user-slug");
  }

  getEmail() {
    return cy.get("#user-email");
  }

  getLocation() {
    return cy.get("#user-location");
  }

  getWebsite() {
    return cy.get("#user-website");
  }

  getFacebook() {
    return cy.get("#user-facebook");
  }

  getTwitter() {
    return cy.get("#user-twitter");
  }

  getBio() {
    return cy.get("#user-bio");
  }

  getOldPassword() {
    return cy.get("#user-password-old");
  }

  getNewPassword() {
    return cy.get("#user-password-new");
  }

  getVerifyPassword() {
    return cy.get("#user-new-password-verification");
  }

  getChangePasswordButton() {
    return cy.get("span").contains("Change Password");
  }
  getSaveButton() {
    return cy.get("span").contains("Save");
  }

  getProfilePage() {
    cy.wait(1500);
    cy.get(".gh-user-avatar").click();
    cy.wait(1500);
    cy.get("a").contains("Your profile").click();
    cy.wait(3200);
  }

  EnterProfileData(
    fullname,
    slug,
    email,
    location,
    website,
    facebookProfile,
    twitterProfile,
    biography
  ) {
    this.getFullName().clear();
    this.getFullName().type(fullname, { force: true });
    this.getSlug().clear();
    this.getSlug().type(slug, { force: true });
    this.getEmail().clear();
    this.getEmail().type(email, { force: true });
    this.getLocation().clear();
    this.getLocation().type(location, { force: true });
    this.getWebsite().clear();
    this.getWebsite().type(website, { force: true });
    this.getFacebook().clear();
    this.getFacebook().type(facebookProfile, { force: true });
    this.getTwitter().clear();
    this.getTwitter().type(twitterProfile, { force: true });
    this.getBio().clear();
    this.getBio().type(biography, { force: true });

    this.getSaveButton().click({ force: true });
  }
}

export default ProfilePage;
