class LoginPage {
  getEmail() {
    return cy.get("#ember7");
  }

  getPassword() {
    return cy.get("#ember9");
  }

  getLoginButton() {
    return cy.get("#ember11");
  }

  getForgetPassword() {
    return cy.get("#ember10");
  }
}

export default LoginPage;
