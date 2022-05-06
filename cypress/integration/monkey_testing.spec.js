import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import CreatePostPage from "../support/createPostPage";

describe("Prueba Monkey sobre Ghost App", function () {
  it("Iniciar sesion como administrador", function () {
    cy.log("Escenario con Usuario registrado");
    const loginPage = new LoginPage();
    cy.visit("http://localhost:2368/ghost/");
    loginPage.getEmail().type("andelahozg@gmail.com");
    loginPage.getPassword().type("Centro2021#");
    loginPage.getLoginButton().click();
    cy.log("Escenario con Usuario NO registrado");
    cy.visit("http://localhost:2368/ghost/");
    loginPage.getEmail().type("desconocido@gmail.com");
    loginPage.getPassword().type("Secret123#");
    loginPage.getLoginButton().click();
  });

  it("Crear post", function () {
    login();
    // /* ==== Create post function ==== */
    const dashboardPage = new Dashboard();
    const postPage = new PostsPage();
    const createPostPage = new CreatePostPage();
    cy.wait(3500);
    cy.log("Escenario con preview");
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(2500);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    createPostPage.getPostTitle().type("A post for testing with Cypress");
    createPostPage.getPostContent().type("Hi there, now we are just testing.");
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });

    cy.log("Escenario con video y de acceso solo para miembros.");
    cy.wait(2500);
    cy.visit("http://localhost:2368/ghost/");
    cy.wait(2500);
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(3500);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    createPostPage.getPostTitle().type("A video post for testing with Cypress");
    createPostPage.getPostContent().click({ timeOut: 6000 });
    createPostPage.getPostFormat().click({ timeOut: 6000 });
    cy.wait(2500);
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    createPostPage.getPostFormat().click({ timeOut: 6000 });
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    cy.wait(2500);
    createPostPage
      .getYoutubeUrl()
      .type("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl");
    cy.wait(1500);
    createPostPage.getPostSettings().click({ force: true });
    cy.wait(1500);
    createPostPage.getPostAccessDropDown().select("members");
    createPostPage.getPostSettings().click({ force: true });
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    //   /* ==== End ==== */
  });

  it("Crear pagina", function () {
    login();

    cy.wait(1000);
    cy.get('[href="#/editor/page/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("Hi, now we are just testing. ", { force: true });
    });
    cy.wait(500);
    cy.get("textarea").then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("Testing page", { force: true });
    });
    cy.get('[data-placeholder="Begin writing your page..."]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("This page content is for testing purposes.", {
        force: true,
      });
    });
    cy.wait(1000);
    cy.get("span")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
    cy.wait(1000);
    cy.get("button > span")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
    cy.wait(1000);
    cy.get("button")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
  });

  it("Crear nuevo miembro manualmente", function () {
    login();
    cy.get('[href="#/members/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).click({ force: true });
    });
    cy.wait(1000);
    cy.get('[href="#/members/new/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).click({ force: true });
    });
    cy.wait(500);

    cy.get('[name="name"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("George Tester", { force: true });
    });
    cy.get('[name="email"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("testing@gmail.com", {
        force: true,
      });
    });
    cy.get('[name="note"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("Some random text", {
        force: true,
      });
    });
    cy.wait(1000);
    cy.get("span")
      .contains("Save")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
  });
  it("Editar post", function () {
    login();
    /* ==== Edit post function ==== */
    cy.get("#ember26").then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).click({ force: true });
    });
    cy.wait(2000);

    cy.get("span")
      .contains("By")
      .then(($text) => {
        var text = $text.get(getRandomInt(0, $text.length));
        cy.wrap(text).click({ force: true });
      });

    cy.wait(3000);
    cy.get("textarea").then(($title) => {
      var title = $title.get(0);
      cy.wrap(title).type("Edited Post ", { force: true });
    });
    cy.get('[data-placeholder="Begin writing your post..."]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text).type("This content has been edited for testing purposes.", {
        force: true,
      });
    });
    cy.wait(1000);
    cy.get("span")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
    cy.wait(1000);
    cy.get("button > span")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
    cy.wait(1000);
    cy.get("button")
      .contains("Publish")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text).click({ force: true });
      });
    /* ==== End ==== */
  });
});

function login() {
  cy.visit("http://localhost:2368/ghost/");
  cy.wait(1000);
  cy.get("#ember7").clear();
  cy.get("#ember7").type("andelahozg@gmail.com");
  cy.get("#ember9").clear();
  cy.get("#ember9").type("Centro2021#{enter}");
  cy.get("#ember11").click();
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
