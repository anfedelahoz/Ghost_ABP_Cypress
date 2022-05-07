import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import CreatePostPage from "../support/createPostPage";
import PagesSection from "../support/pagesSection";
import CreateMemberPage from "../support/createMember";
import StaffPage from "../support/staffPage";

describe("Prueba Monkey sobre Ghost App", function () {
  it("Iniciar sesion como administrador", function () {
    cy.log("1. Escenario con Usuario registrado");
    const loginPage = new LoginPage();
    cy.visit("http://localhost:2368/ghost/");
    loginPage.getEmail().type("andelahozg@gmail.com");
    loginPage.getPassword().type("Centro2021#");
    loginPage.getLoginButton().click();

    cy.log("2. Escenario con Usuario NO registrado");
    cy.visit("http://localhost:2368/ghost/");
    loginPage.getEmail().type("desconocido@gmail.com");
    loginPage.getPassword().type("Secret123#");
    loginPage.getLoginButton().click();

    cy.log("3. Escenario con credenciales invalidas");
    cy.visit("http://localhost:2368/ghost/");
    loginPage.getEmail().type("andelahozg");
    loginPage.getPassword().type("Centro2021#");
    loginPage.getLoginButton().click();
  });

  it("Crear post", function () {
    login();
    // /* ==== Create post function ==== */
    const dashboardPage = new Dashboard();
    const postPage = new PostsPage();
    const createPostPage = new CreatePostPage();
    cy.wait(3500);
    cy.log("4. Escenario con preview");
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(2500);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    createPostPage.getPostTitle().type("A post for testing with Cypress");
    createPostPage.getPostContent().type("Hi there, now we are just testing.");
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });

    cy.log("5. Escenario con video y de acceso solo para miembros.");
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
    cy.wait(4500);
    createPostPage.getPostSettings().click({ force: true });
    cy.wait(1500);
    createPostPage.getPostAccessDropDown().select("members");
    createPostPage.getPostSettings().click({ force: true });
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    cy.visit("http://localhost:2368/");
    //   /* ==== End ==== */
  });

  it("Crear pagina", function () {
    cy.log("6. Escenario con video y de acceso solo para miembros.");
    login();
    const pagesSection = new PagesSection();
    cy.wait(2000);
    pagesSection.getPageMenu().click({ force: true });
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });
    pagesSection.getPageTitle().type("Testing Post");

    pagesSection
      .getPageContent()
      .type("This page content is for testing purposes.", {
        force: true,
      });
    cy.wait(500);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(500);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(500);
    pagesSection.getThirdPublishButton().click({ force: true });
  });

  it("Crear nuevo miembro manualmente", function () {
    cy.log("7. Escenario con miembro agregado por primera vez.");
    login();
    createNewMember(
      "George Tester",
      "georget@gmail.com",
      "User added for first time."
    );
    cy.wait(1000);

    cy.log("8. Escenario con correo ya registrado como miembro.");
    createNewMember(
      "Pablo",
      "petertester@gmail.com",
      "User added for first time."
    );
    cy.wait(1000);
    createNewMember(
      "Peter",
      "petertester@gmail.com",
      "User with an email that is already registered as member."
    );

    cy.log("9. Escenario con datos invalidos.");
    createNewMember("Sara", "155000", "User added with invalid data.");
    cy.wait(1000);
  });

  it("Editar post", function () {
    cy.log("10. Escenario con post editado por administrador.");
    login();
    editPost(
      "Edited post",
      "This post was edited for testing purposes.",
      false
    );

    cy.log("11. Escenario con post editado por administrador.");
    cy.visit("http://localhost:2368/ghost/");
    editPost(
      "Edited post for only members",
      "This post was edited for testing purposes and with access for only members.",
      true
    );
    cy.visit("http://localhost:2368/");
  });

  it("Recuperar contrasena", function () {
    function recoverPassword(email, attemps) {
      const loginPage = new LoginPage();
      cy.visit("http://localhost:2368/ghost");
      loginPage.getEmail().type(email);
      loginPage.getForgetPassword().click({ force: true });
    }
    cy.log("12. Escenario con usuario registrado.");
    recoverPassword("andelahozg@gmail.com");
    // loginPage.getEmail().type('andelahozg@gmail.com')
    // loginPage.getForgetPassword().click({ force: true });

    cy.log("13. Escenario con usuario NO registrado.");
    recoverPassword("desconocido3000@gmail.com");
    // loginPage.getEmail().type('andelahozg@gmail.com')
    // loginPage.getForgetPassword().click({ force: true });

    cy.log(
      "14. Escenario validar que se aplique el numero (5) de intentos limites."
    );
    var n;
    for (var i = 0; i < 5; i++) {
      n += i;
      recoverPassword("admin@tester.com");
    }

    cy.log("15. Escenario con datos invalidos.");
    recoverPassword(5501000);
  });

  it("Invitar usuario al staff", function () {
    cy.log("16. Escenario invitar como Contribuidor.");
    login();
    invitePeople("a@gmail.com");
    cy.visit("http://localhost:2368/ghost/#/settings/staff");

    cy.log("17. Escenario invitar como Autor.");
    cy.visit("http://localhost:2368/ghost");
    invitePeople("b@gmail.com");
    cy.visit("http://localhost:2368/ghost/#/settings/staff");

    cy.log("18. Escenario invitar como Editor.");
    cy.visit("http://localhost:2368/ghost");
    invitePeople("c@gmail.com");
    cy.visit("http://localhost:2368/ghost/#/settings/staff");

    cy.log("19. Escenario invitar como Administrador.");
    cy.visit("http://localhost:2368/ghost");
    invitePeople("d@gmail.com");
    cy.visit("http://localhost:2368/ghost/#/settings/staff");

    cy.log("20. Escenario invitar con datos invalidos.");
    cy.visit("http://localhost:2368/ghost");
    invitePeople("2%&*#$^&*");
    cy.visit("http://localhost:2368/ghost/#/settings/staff");
  });

  // END
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

function createNewMember(name, email, note) {
  const newMemberPage = new CreateMemberPage();
  cy.visit("http://localhost:2368/ghost/");
  cy.wait(3000);
  newMemberPage.getMembersMenu().click({ force: true });
  cy.wait(3500);
  newMemberPage.getNewMemberButton().click({ force: true });
  cy.wait(500);
  newMemberPage.getNewMemberName().type(name, { force: true });
  newMemberPage.getNewMemberEmail().type(email, { force: true });
  newMemberPage.getNewMemberNote().type(note, {
    force: true,
  });
  cy.wait(1000);
  newMemberPage.getNewMemberSaveButton().click({ force: true });
}

function editPost(title, content, accessOnlyMembers) {
  const postsPage = new PostsPage();
  const dashboardPage = new Dashboard();
  const createPostPage = new CreatePostPage();
  cy.wait(1000);
  dashboardPage.getPostsMenu().click({ force: true });
  cy.wait(2500);
  postsPage.getRandomPost().click({ force: true });
  cy.wait(3000);
  createPostPage.getPostTitle().clear();
  createPostPage.getPostTitle().type(title, { force: true });

  createPostPage.getPostContent().clear();
  createPostPage.getPostContent().type(content, {
    force: true,
  });

  if (accessOnlyMembers == true) {
    createPostPage.getPostSettings().click({ force: true });
    cy.wait(1500);
    createPostPage.getPostAccessDropDown().select("members");
    createPostPage.getPostSettings().click({ force: true });
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
  }
  cy.wait(1000);
  createPostPage.getFirstPublishButton().click({ force: true });
  createPostPage.getFirstPublishButton().click({ force: true });
  createPostPage.getFirstPublishButton().click({ force: true });
}

function invitePeople(email, roleStaff) {
  const staffPage = new StaffPage();
  staffPage.getSettings().click({ force: true });
  staffPage.getStaff().click({ force: true });
  staffPage.getInviteButton().click({ force: true });
  cy.wait(5000);
  if (roleStaff == "Author") {
    staffPage.getAuthor().click({ force: true });
  } else if (roleStaff == "Editor") {
    staffPage.getEditor().click({ force: true });
  } else if (roleStaff == "Administrador") {
    staffPage.getAdministrador() / click({ force: true });
  } else {
    staffPage.getContributor().click({ force: true });
  }
  staffPage.getStaffEmail().type(email);
  staffPage.getSendButton().click({ force: true });
  cy.visit("http://localhost:2368/ghost/#/settings/staff");
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
