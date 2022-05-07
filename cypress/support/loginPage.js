class LoginPage {
  getEmail() {
    return cy.get("#ember7");
  }

  getPassword() {
    return cy.get("#ember9");
  }

  getLoginButton() {
    return cy.get("span").contains("Forgot?");
  }

  getForgetPassword() {
    return cy.get("#ember10");
  }
}

export default LoginPage;
