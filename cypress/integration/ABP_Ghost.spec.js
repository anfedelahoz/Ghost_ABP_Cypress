import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import CreatePostPage from "../support/createPostPage";
import PagesSection from "../support/pagesSection";
import CreateMemberPage from "../support/createMember";
import StaffPage from "../support/staffPage";

describe("Prueba Monkey sobre Ghost App", function () {
  const loginPage = new LoginPage();
  const dashboardPage = new Dashboard();
  const postPage = new PostsPage();
  const createPostPage = new CreatePostPage();

  function loginValid() {
    cy.visit("http://localhost:3001/ghost/");
    cy.wait(1000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getEmail().type("andelahozg@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getPassword().type("Centro2021#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getPassword().type("{enter}");
    loginPage.getLoginButton().click();
    cy.wait(700);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  }

  it("1 . Iniciar sesion como administrador: con Usuario registrado", function () {
    loginValid();
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("2 . Iniciar sesion como administrador: con Usuario NO registrado", function () {
    cy.visit("http://localhost:3001/ghost/");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getEmail().type("desconocido@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getPassword().type("Secret123#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getLoginButton().click();
    cy.wait(700);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("3 . Iniciar sesion como administrador: con credenciales invalidas", function () {
    cy.visit("http://localhost:3001/ghost/");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getEmail().type("andelahozg");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getPassword().type("Centro2021#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    loginPage.getLoginButton().click();
    cy.wait(700);
  });

  it("4 . Crear post: con preview", function () {
    loginValid();
    cy.wait(3500);
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(2500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    postPage.getNewPostButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostTitle().type("A post for testing with Cypress");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostContent().type("Hi there, now we are just testing.");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2500);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
  });

  it("5 . Crear post: con video y de acceso solo para miembros.", function () {
    loginValid();
    cy.wait(3500);
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(3000);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostTitle().type("A video post for testing with Cypress");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostContent().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2500);
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2500);
    createPostPage
      .getYoutubeUrl()
      .type("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl");
    cy.wait(3500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.wait(1500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostAccessDropDown().select("members");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(3000);
    cy.visit("http://localhost:3001/");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(4000);
  });

  it("6 . Crear pagina", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
    pagesSection.getPageMenu().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    pagesSection.getPageTitle().type("Testing Post");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    pagesSection
      .getPageContent()
      .type("This page content is for testing purposes.", { force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("7 . Crear nuevo miembro manualmente", function () {
    cy.log("7. Escenario con miembro agregado por primera vez.");
    loginValid();
    createNewMember(
      "George Tester",
      "georget@gmail.com",
      "User added for first time."
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(1000);
  });

  it("8 . Crear nuevo miembro manualmente: con correo ya registrado.", function () {
    loginValid();
    cy.wait(3000);
    createNewMember(
      "Pablo",
      "petertester@gmail.com",
      "User added for first time."
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(3000);
    cy.visit("http://localhost:3001/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createNewMember(
      "Peter",
      "petertester@gmail.com",
      "User with an email that is already registered as member."
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("9 . Crear nuevo miembro manualmente: con datos invalidos", function () {
    loginValid();
    cy.wait(3000);
    createNewMember("Sara", "155000", "User added with invalid data.");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(1000);
  });

  it("10. Editar post: con nuevo contenido de acceso todos", function () {
    loginValid();
    editPost(
      "Edited post",
      "This post was edited for testing purposes.",
      false
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("11. Editar post: con acceso solo a miembros", function () {
    loginValid();
    editPost(
      "Edited post for only members",
      "This post was edited for testing purposes and with access for only members.",
      true
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(3000);
    cy.visit("http://localhost:3001/");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("12. Recuperar contrasena: usuario registrado", function () {
    recoverPassword("andelahozg@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("13. Recuperar contrasena: usuario NO registrado", function () {
    recoverPassword("desconocido3000@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("14. Recuperar contrasena: validar que se aplique el numero (5) de intentos limites", function () {
    var n;
    for (var i = 0; i < 5; i++) {
      n += i;
      recoverPassword("admin@tester.com");
      cy.screenshot(
        `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
          Cypress.currentTest.title
        }`
      );
    }
  });

  it("15. Recuperar contrasena: con datos invalidos", function () {
    recoverPassword(5501000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("16. Invitar usuario al staff: invitar como Contribuidor", function () {
    loginValid();
    invitePeople("a@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.visit("http://localhost:3001/ghost/#/settings/staff");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("17. Invitar usuario al staff: invitar como Autor", function () {
    loginValid();
    invitePeople("b@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(1500);
    cy.visit("http://localhost:3001/ghost/#/settings/staff");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("18. Invitar usuario al staff: invitar como Editor", function () {
    loginValid();
    cy.visit("http://localhost:3001/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    invitePeople("c@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.visit("http://localhost:3001/ghost/#/settings/staff");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("19. Invitar usuario al staff: invitar como Administrador", function () {
    loginValid();
    cy.visit("http://localhost:3001/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    invitePeople("d@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.visit("http://localhost:3001/ghost/#/settings/staff");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  it("20. Invitar usuario al staff: invitar con datos invalidos", function () {
    loginValid();
    cy.visit("http://localhost:3001/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    invitePeople("2%&*#$^&*");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.visit("http://localhost:3001/ghost/#/settings/staff");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  });

  // END
});

function createNewMember(name, email, note) {
  const newMemberPage = new CreateMemberPage();
  cy.visit("http://localhost:3001/ghost/");
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(3000);
  newMemberPage.getMembersMenu().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(3500);
  newMemberPage.getNewMemberButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(500);
  newMemberPage.getNewMemberName().type(name, { force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  newMemberPage.getNewMemberEmail().type(email, { force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  newMemberPage.getNewMemberNote().type(note, {
    force: true,
  });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(1000);
  newMemberPage.getNewMemberSaveButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
}

function editPost(title, content, accessOnlyMembers) {
  const postsPage = new PostsPage();
  const dashboardPage = new Dashboard();
  const createPostPage = new CreatePostPage();
  cy.wait(1000);
  dashboardPage.getPostsMenu().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(2500);
  postsPage.getRandomPost().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(3000);
  createPostPage.getPostTitle().clear();
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  createPostPage.getPostTitle().type(title, { force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  createPostPage.getPostContent().clear();
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  createPostPage.getPostContent().type(content, {
    force: true,
  });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );

  if (accessOnlyMembers == true) {
    createPostPage.getPostSettings().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(1500);
    createPostPage.getPostAccessDropDown().select("members");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
    cy.wait(2000);
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
        Cypress.currentTest.title
      }`
    );
  }
  cy.wait(2000);
  createPostPage.getFirstPublishButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(2000);
  createPostPage.getFirstPublishButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(2000);
  createPostPage.getFirstPublishButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
}

function invitePeople(email, roleStaff) {
  const staffPage = new StaffPage();

  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  staffPage.getStaff().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  staffPage.getInviteButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(5000);
  staffPage.getStaffEmail().type(email);
  cy.wait(2000);
  if (roleStaff == "Author") {
    staffPage.getAuthor().click({ force: true });
  } else if (roleStaff == "Editor") {
    staffPage.getEditor().click({ force: true });
  } else if (roleStaff == "Administrador") {
    staffPage.getAdministrador() / click({ force: true });
  } else {
    staffPage.getContributor().click({ force: true });
  }
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );

  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  staffPage.getSendButton().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.visit("http://localhost:3001/ghost/#/settings/staff");
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
}

function recoverPassword(email, attemps) {
  const loginPage = new LoginPage();
  cy.visit("http://localhost:3001/ghost");
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  loginPage.getEmail().type(email);
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  loginPage.getForgetPassword().click({ force: true });
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
}
