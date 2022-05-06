import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import SinglePostPage from "../support/singlePostPage";

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

    /* ==== Create post function ==== */
    const dashboardPage = new Dashboard();
    const postPage = new PostsPage();
    const singlePostPage = new SinglePostPage();

    cy.log("Escenario con datos validos");
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(2500);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    singlePostPage.getPostTitle().type("A post for testing with Cypress");
    singlePostPage.getPostContent().type("Hi there, now we are just testing.");
    singlePostPage.getFirstPublishButton().click({ timeOut: 6000 });
    singlePostPage.getSecondPublishButton().click({ timeOut: 6000 });
    singlePostPage.getThirdPublishButton().click({ timeOut: 6000 });
    //   /* ==== End ==== */
  });
  //   it("Crear pagina", function () {
  //     login();
  //     cy.get('[href="#/pages/"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).click({ force: true });
  //     });
  //     cy.wait(1000);
  //     cy.get('[href="#/editor/page/"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("Hi, now we are just testing. ", { force: true });
  //     });
  //     cy.wait(500);
  //     cy.get("textarea").then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("Testing page", { force: true });
  //     });
  //     cy.get('[data-placeholder="Begin writing your page..."]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("This page content is for testing purposes.", {
  //         force: true,
  //       });
  //     });
  //     cy.wait(1000);
  //     cy.get("span")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //     cy.wait(1000);
  //     cy.get("button > span")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //     cy.wait(1000);
  //     cy.get("button")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //   });
  //   it("Crear nuevo miembro manualmente", function () {
  //     login();
  //     cy.get('[href="#/members/"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).click({ force: true });
  //     });
  //     cy.wait(1000);
  //     cy.get('[href="#/members/new/"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).click({ force: true });
  //     });
  //     cy.wait(500);

  //     cy.get('[name="name"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("George Tester", { force: true });
  //     });
  //     cy.get('[name="email"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("testing@gmail.com", {
  //         force: true,
  //       });
  //     });
  //     cy.get('[name="note"]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("Some random text", {
  //         force: true,
  //       });
  //     });
  //     cy.wait(1000);
  //     cy.get("span")
  //       .contains("Save")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //   });
  //   it("Editar post", function () {
  //     login();
  //     /* ==== Edit post function ==== */
  //     cy.get("#ember26").then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).click({ force: true });
  //     });
  //     cy.wait(2000);

  //     cy.get("span")
  //       .contains("By")
  //       .then(($text) => {
  //         var text = $text.get(getRandomInt(0, $text.length));
  //         cy.wrap(text).click({ force: true });
  //       });

  //     cy.wait(3000);
  //     cy.get("textarea").then(($title) => {
  //       var title = $title.get(0);
  //       cy.wrap(title).type("Edited Post ", { force: true });
  //     });
  //     cy.get('[data-placeholder="Begin writing your post..."]').then(($text) => {
  //       var text = $text.get(0);
  //       cy.wrap(text).type("This content has been edited for testing purposes.", {
  //         force: true,
  //       });
  //     });
  //     cy.wait(1000);
  //     cy.get("span")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //     cy.wait(1000);
  //     cy.get("button > span")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //     cy.wait(1000);
  //     cy.get("button")
  //       .contains("Publish")
  //       .then(($text) => {
  //         var text = $text.get(0);
  //         cy.wrap(text).click({ force: true });
  //       });
  //     /* ==== End ==== */
  //   });
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
