import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import CreatePostPage from "../support/createPostPage";
import PagesSection from "../support/pagesSection";
import CreateMemberPage from "../support/createMember";
import StaffPage from "../support/staffPage";

const loginPage = new LoginPage();
const dashboardPage = new Dashboard();
const postPage = new PostsPage();
const createPostPage = new CreatePostPage();
const port = 2368;

describe("Prueba Monkey sobre Ghost App", function () {
  function loginValid() {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.wait(1000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getEmail().type("andelahozg@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type("Centro2021#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type("{enter}");
    loginPage.getLoginButton().click();
    cy.wait(700);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  }

  it("01_Iniciar_sesion_como_administrador_con Usuario_registrado", function () {
    loginValid();
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("02_Iniciar_sesion_como_administrador_con_Usuario_NO_registrado", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getEmail().type("desconocido@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type("Secret123#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getLoginButton().click();
    cy.wait(700);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("03_Iniciar_sesion_como_administrador_con_credenciales_invalidas", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getEmail().type("andelahozg");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type("Centro2021#");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getLoginButton().click();
    cy.wait(700);
  });

  it("04_Crear_post_con_preview", function () {
    loginValid();
    cy.wait(3500);
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.wait(2500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    postPage.getNewPostButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostTitle().type("A post for testing with Cypress");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostContent().type("Hi there, now we are just testing.");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2500);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("05_Crear_post_con_video_y_de_acceso_solo_para_miembros", function () {
    loginValid();
    cy.wait(3500);
    dashboardPage.getPostsMenu().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(3000);
    postPage.getNewPostButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostTitle().type("A video post for testing with Cypress");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostContent().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2500);
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2500);
    createPostPage
      .getYoutubeUrl()
      .type("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl");
    cy.wait(3500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.wait(1500);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostAccessDropDown().select("members");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(3000);
    cy.visit(`http://localhost:${port}/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(4000);
  });

  it("06 . Crear pagina", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
    pagesSection.getPageMenu().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    pagesSection.getPageTitle().type("Testing Post");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    pagesSection
      .getPageContent()
      .type("This page content is for testing purposes.", { force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("07_Crear_nuevo_miembro_manualmente", function () {
    loginValid();
    createNewMember(
      "George Tester",
      "georget@gmail.com",
      "User added for first time.",
      port
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(1000);
  });

  it("08_Crear_nuevo_miembro_manualmente_con_correo_ya_registrado", function () {
    loginValid();
    cy.wait(3000);
    createNewMember(
      "Pablo",
      "petertester@gmail.com",
      "User added for first time.",
      port
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(3000);
    cy.visit(`http://localhost:${port}/ghost`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createNewMember(
      "Peter",
      "petertester@gmail.com",
      "User with an email that is already registered as member.",
      port
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("09_Crear_nuevo_miembro_manualmente_con_datos_invalidos", function () {
    loginValid();
    cy.wait(3000);
    createNewMember("Sara", "155000", "User added with invalid data.", port);
    cy.wait(1000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("10_Editar_post_con_nuevo_contenido_de_acceso_todos", function () {
    loginValid();
    editPost(
      "Edited post",
      "This post was edited for testing purposes.",
      false
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("11_Editar_post_con_acceso_solo_a_miembros", function () {
    loginValid();
    editPost(
      "Edited post for only members",
      "This post was edited for testing purposes and with access for only members.",
      true
    );
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(3000);
    cy.visit(`http://localhost:${port}/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("12_Recuperar_contrasena_usuario_registrado", function () {
    cy.log("12. Escenario con usuario registrado.");
    recoverPassword("andelahozg@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("13_Recuperar_contrasena_usuario_NO_registrado", function () {
    recoverPassword("desconocido3000@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("14_Recuperar_contrasena_validar_que_se_aplique_el_numero_(5)_de_intentos_limites", function () {
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

  it("15_Recuperar_contrasena_con_datos_invalidos", function () {
    recoverPassword(5501000);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("16_Invitar_usuario_al_staff_invitar_como_Contribuidor", function () {
    loginValid();
    invitePeople("a@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("17_Invitar_usuario_al_staff_invitar_como_Autor", function () {
    loginValid();
    invitePeople("b@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(1500);
    cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("18_Invitar_usuarioal_staff_invitar_como_Editor", function () {
    loginValid();
    cy.visit("http://localhost:2368/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    invitePeople("c@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("19_Invitar_usuario_al_staff_invitar_como_Administrador", function () {
    loginValid();
    cy.visit("http://localhost:2368/ghost");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    invitePeople("d@gmail.com");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("20_Invitar_usuario_al_staff_invitar_con_datos_invalidos", function () {
    loginValid();
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    invitePeople("2%&*#$^&*");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  // END
});

function createNewMember(name, email, note) {
  const newMemberPage = new CreateMemberPage();
  cy.visit(`http://localhost:${port}/ghost/`);
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
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(1500);
    createPostPage.getPostAccessDropDown().select("members");
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    createPostPage.getPostSettings().click({ force: true });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    cy.wait(2000);
    createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
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
  staffPage.getSettings().click({ force: true });
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
  staffPage.getStaffEmail().type(email);
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
  cy.visit(`http://localhost:${port}/ghost/#/settings/staff`);
  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
}

function recoverPassword(email, attemps) {
  const loginPage = new LoginPage();
  cy.visit(`http://localhost:${port}/ghost`);
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
