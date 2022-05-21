import LoginPage from "../support/loginPage";
import TagPage from "../support/tagsPage";
const { faker } = require("@faker-js/faker");

const loginPage = new LoginPage();
const port = 2368;
const userAdmin = "yourAdmin@gmail.com";
const userPassword = "yourPassword#";
const emailsDataPool = [
  "kraken1212@hotmail.com",
  "rel12134d@gmail.com",
  "12rente@gmail.com",
  "master22d@yahoo.com",
  "gogo124@gmail.com",
  "rel12134d@hotmail.com",
];
const stringsDataPool = [
  "desconocido13",
  "lorem sdasa",
  "some?cars",
  "bestlllllllllll111111",
  "gogolllllllllllll",
  "rel12134d",
  "18712873273929389898122891",
  "0000000000000000000000000000000000000000000000000000000000000000000000000",
];
const passwordsDataPool = [
  "wedwd2@w#e23&2323",
  "da#sdfdff432334",
  "fsdfdsfsdf3e42#",
  "jausnkd#s$ksio8$181",
  "dsds^dsd212212",
  "kaluisiaL@#DJSJD",
  "",
  " ",
  "0000000000000000000000000000000000000000000000000000000000000000000000000000",
];
const colorCodes = [
  "265731",
  "355633",
  "346634",
  "745637",
  "447664",
  "145654",
  "444444",
  "111111",
  "355664",
  "945639",
  "844635",
  "345656",
  "545637",
];
const tagTitles = [
  "Google Jobs",
  "Amazon Jobs",
  "Nike $hoes",
  "International Trucks",
  "Dell EMC",
  "Kenworth Trucks",
  "Remote Jobs",
  "Best Video Games",
  "Chess Board",
  "Top 10 Laptops",
  "8446*(_35",
  "345$%^&*((((((656",
  "54%$#$%5637",
];
const tagDescriptions = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  "                           ",
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  "sddnksdjkwke23278389273l;e'3#@#@#4erd,fmsdmmdnnwd   wjejwjewewe@#%%&@",
  "Remote wewe2323@##@$##$%$%^&!@!@!@!@!@!@!Jobs",
  "Best Video Games",
  "54%$#$%5637",
];
const tagSlugs = [
  "cars",
  "bikes",
  "trucks",
  "remote_jobs",
  "travels",
  "New_post",
  "extensio#$%n_code21212",
  "world?brands",
  "Chess Board",
  "Top 10 Laptops",
  "8446*(_35",
  "345$%^&*((((((656",
  "54%$#$%5637",
];

describe("Prueba E2E sobre las funcionalidades de incio de sesión, creación y modificación de Tags en Ghost App", function () {
  function loginValidData() {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.wait(1000);
    loginPage.getEmail().type(userAdmin);
    loginPage.getPassword().type(userPassword);
    loginPage.getPassword().type("{enter}");
    loginPage.getLoginButton().click();
    cy.wait(700);
  }

  it("01_Iniciar_sesion_como_administrador_con_usuario_registrado_data_pool_a_priori", function () {
    loginValidData();
  });

  it("02_Iniciar_sesion_como_administrador_con_usuario_no_registrado_data_pool_a_priori", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    loginPage
      .getEmail()
      .type(emailsDataPool[Math.floor(Math.random() * emailsDataPool.length)]);
    loginPage
      .getPassword()
      .type(
        passwordsDataPool[Math.floor(Math.random() * passwordsDataPool.length)]
      );
    loginPage.getLoginButton().click();
    cy.wait(700);
  });

  it("03_Iniciar_sesion_como_administrador_con_credenciales_invalidas_data_pool_a_priori", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    loginPage
      .getEmail()
      .type(
        stringsDataPool[Math.floor(Math.random() * stringsDataPool.length)]
      );
    loginPage
      .getPassword()
      .type(
        passwordsDataPool[Math.floor(Math.random() * passwordsDataPool.length)]
      );
    loginPage.getLoginButton().click();
    cy.wait(700);
  });

  it("04_Recuperar_contrasena_usuario_registrado_data_pool_a_priori", function () {
    cy.log("12. Escenario con usuario registrado.");
    recoverPassword(userAdmin);
  });

  it("05_Recuperar_contrasena_usuario_no_registrado_data_pool_a_priori", function () {
    recoverPassword(
      emailsDataPool[Math.floor(Math.random() * emailsDataPool.length)]
    );
  });

  it("06_Recuperar_contrasena_validar_que_se_aplique_cinco_(5)_de_intentos_limites_data_pool_a_priori", function () {
    var n;
    for (var i = 0; i < 5; i++) {
      n += i;
      recoverPassword(
        emailsDataPool[Math.floor(Math.random() * emailsDataPool.length)]
      );
    }
  });

  it("07_Recuperar_contrasena_con_datos_invalidos_data_pool_a_priori", function () {
    recoverPassword(
      stringsDataPool[Math.floor(Math.random() * stringsDataPool.length)]
    );
  });

  it("08_Iniciar_sesion_como_administrador_con_usuario_no_registrado_data_aleatoria", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getEmail().type(faker.internet.email());
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type(faker.internet.password());
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

  it("09_Iniciar_sesion_como_administrador_con_credenciales_invalidas_data_aleatoria", function () {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getEmail().type(faker.lorem.paragraph());
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getPassword().type(faker.lorem.paragraph());
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
    loginPage.getLoginButton().click();
    cy.wait(700);
  });

  it("10_Recuperar_contrasena_usuario_no_registrado_data_aleatoria", function () {
    recoverPassword(faker.internet.email());
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("11_Recuperar_contrasena_validar_que_se_aplique_el_numero_(5)_de_intentos_limites_data_aleatoria", function () {
    var n;
    for (var i = 0; i < 5; i++) {
      n += i;
      recoverPassword(faker.internet.email());
      cy.screenshot(
        `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
          Cypress.currentTest.title
        }`
      );
    }
  });

  it("12_Recuperar_contrasena_con_datos_invalidos_data_aleatoria", function () {
    recoverPassword(faker.lorem.paragraph());
    cy.screenshot(
      `Escenario_${Cypress.currentTest.title.slice(0, 2)}/` +
        (port == 3001 ? "Before_" : "") +
        `${Cypress.currentTest.title}`
    );
  });

  it("13_Crear_nuevo_tag_datos_a_priori_válidos_todas_las_entradas", function () {
    loginValidData();
    createTag(
      tagTitles[Math.floor(Math.random() * tagTitles.length)],
      colorCodes[Math.floor(Math.random() * colorCodes.length)],
      tagSlugs[Math.floor(Math.random() * tagSlugs.length)],
      tagDescriptions[Math.floor(Math.random() * tagDescriptions.length)]
    );
  });

  it("14_Crear_nuevo_tag_datos_a_priori_válidos_solo_con_titulo", function () {
    loginValidData();
    createTagJustTitle(tagTitles[Math.floor(Math.random() * tagTitles.length)]);
  });

  it("15_Crear_nuevo_tag_datos_a_priori_solo_con_titulo_mayor_191", function () {
    loginValidData();
    createTagJustTitle(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    );
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("16_Crear_nuevo_tag_datos_a_priori_solo_con_titulo_en_blanco", function () {
    loginValidData();
    createTagJustTitle(" ");
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("17_Crear_nuevo_tag_datos_a_priori_solo_con_titulo_y_descripcion_mayor_500", function () {
    loginValidData();
    createTagJustTitleDescription(
      tagTitles[Math.floor(Math.random() * tagTitles.length)],
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    );
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("18_Crear_nuevo_tag_datos_a_priori_todas_las_entradas_color_incorrecto", function () {
    loginValidData();
    createTag(
      tagTitles[Math.floor(Math.random() * tagTitles.length)],
      tagSlugs[Math.floor(Math.random() * tagSlugs.length)],
      tagSlugs[Math.floor(Math.random() * tagSlugs.length)],
      tagDescriptions[Math.floor(Math.random() * tagDescriptions.length)]
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("19_Crear_nuevo_tag_datos_aleatorios_válidos_todas_las_entradas", function () {
    loginValidData();
    createTag(
      faker.vehicle.vehicle(),
      faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric(),
      faker.company.companyName(),
      faker.lorem.paragraph()
    );
  });

  it("20_Crear_nuevo_tag_datos_aleatorios_válidos_solo_con_titulo", function () {
    loginValidData();
    createTagJustTitle(faker.vehicle.vehicle());
  });

  it("21_Crear_nuevo_tag_datos_aleatorios_con_titulo_mayor_191", function () {
    loginValidData();
    createTagJustTitle(
      faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph()
    );
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("22_Crear_nuevo_tag_datos_aleatorios_solo_con_titulo_y_descripcion_mayor_500", function () {
    loginValidData();
    createTagJustTitleDescription(
      faker.hacker.phrase(),
      faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph()
    );
    cy.wait(1000);
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("23_Crear_nuevo_tag_datos_aleatorios_todas_las_entradas_color_incorrecto", function () {
    loginValidData();
    createTag(
      faker.vehicle.vehicle(),
      faker.finance.amount(),
      faker.company.companyName(),
      faker.lorem.paragraph()
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("24_Crear_nuevo_tag_datos_aleatorios_solo_ingresando_descripcion", function () {
    loginValidData();
    createTagJustDescription(faker.lorem.paragraph());
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("25_Crear_nuevo_tag_datos_aleatorios_solo_ingresando_slug", function () {
    loginValidData();
    createTagJustSlug(faker.company.companyName());
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("26_Crear_nuevo_tag_datos_aleatorios_solo_ingresando_color", function () {
    loginValidData();
    createTagJustColor(
      faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric()
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("27_Crear_nuevo_tag_datos_aleatorios_todas_las_entradas_slug_mayor_256_caractares", function () {
    loginValidData();
    createTag(
      faker.vehicle.vehicle(),
      faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric() +
        faker.random.numeric(),
      faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph(),
      faker.lorem.paragraph()
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("28_Editar_tag_datos_aleatorios_guardar_sin_nombre", function () {
    loginValidData();
    editTagName();
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("29_Editar_tag_datos_aleatorios_guardar_con_descripcion_mayor_500_caractares", function () {
    loginValidData();
    editTagDescription(
      faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph(),
      faker.lorem.paragraph()
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });

  it("30_Editar_tag_datos_aleatorios_guardar_con_nombre_mayor_191_caractares", function () {
    loginValidData();
    editTagName191(
      faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph() +
        faker.lorem.paragraph()
    );
    cy.get('[class="gh-btn gh-btn-red"]').click({ force: true });
  });
});

function createTag(name, color, slug, description) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagName().type(name, { force: true });
  tagPage.getTagColor().type(color, { force: true });
  tagPage.getTagSlug().type(slug, { force: true });
  tagPage.getTagDescription().type(description, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function editTagName() {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  cy.wait(1000);
  tagPage.getTag().click({ force: true });
  cy.wait(1000);
  tagPage.getTagName().clear();
  cy.wait(1000);
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function editTagName191(name) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  cy.wait(1000);
  tagPage.getTag().click({ force: true });
  cy.wait(1000);
  tagPage.getTagName().clear();
  cy.wait(1000);
  tagPage.getTagName().type(name, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });

  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(2000);
}

function editTagDescription(description) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  cy.wait(1000);
  tagPage.getTag().click({ force: true });
  cy.wait(1000);
  tagPage.getTagDescription().type(description, { force: true });
  cy.wait(1000);
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });

  cy.screenshot(
    `Escenario_${Cypress.currentTest.title.slice(0, 2)}/${
      Cypress.currentTest.title
    }`
  );
  cy.wait(2000);
}

function createTagJustTitle(name) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagName().type(name, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function createTagJustDescription(description) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagDescription().type(description, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function createTagJustColor(color) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagColor().type(color, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function createTagJustSlug(slug) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagSlug().type(slug, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function createTagJustTitleDescription(name, description) {
  const tagPage = new TagPage();
  tagPage.getTagsPage().click({ force: true });
  tagPage.getNewTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagName().type(name, { force: true });
  tagPage.getTagDescription().type(description, { force: true });
  tagPage.getSaveTagButton().click({ force: true });
  cy.wait(1000);
  tagPage.getTagsPage().click({ force: true });
  cy.wait(2000);
}

function recoverPassword(email, attemps) {
  const loginPage = new LoginPage();
  cy.visit(`http://localhost:${port}/ghost`);
  loginPage.getEmail().type(email);
  loginPage.getForgetPassword().click({ force: true });
}
