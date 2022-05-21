import LoginPage from "../support/loginPage";
import ProfilePage from "../support/profilePage";

const { faker } = require("@faker-js/faker");

const loginPage = new LoginPage();
const profilePage = new ProfilePage();
const port = 2368;
const userAdmin = "yourAdmin@hotmail.com";
const userPassword = "yourPasword&";

// Pool de datos a-priori:

const esc1 = {
  fullname: " ",
  slug: "andres",
  email: "andelahozg@gmail.com",
  location: "Colombia",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Here we are testing",
};

const esc2 = {
  fullname: "Andres De la Hoz",
  slug: " ",
  email: "andelahozg@gmail.com",
  location: "Brasil",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Aqui estamos testando",
};

const esc3 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: " ",
  location: "Brasil",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Aqui estamos testando",
};

const esc4 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg@gmail.com",
  location: " ",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Aqui estamos testando",
};

const esc5 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg@gmail.com",
  location: "Brasil",
  website: " ",
  facebookProfile: " ",
  twitterProfile: "andresdlahoz",
  biography: "Aqui estamos testando",
};

const esc6 = {
  fullname: "Andres De la Hoz",
  slug: " ",
  email: "andelahozg@gmail.com",
  location: "Colombia",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Here we are testing",
};

const esc7 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg@gmail.com",
  location: "Colombia",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: " ",
};

const esc8 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg.com",
  location: "Colombia",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Here we are testing",
};

const esc9 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg@",
  location: "Colombia",
  website: " ",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Here we are testing",
};

const esc10 = {
  fullname: "Andres De la Hoz",
  slug: "andres",
  email: "andelahozg.com",
  location: "Colombia",
  website: "www.my_space_miso",
  facebookProfile: "anfedelahoz",
  twitterProfile: "andresdlahoz",
  biography: "Here we are testing",
};

// Pool de Datos Aleatorio dinamico:
const esc11 = {
  fullname: faker.random.alpha(200),
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.internet.domainName()}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc12 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.random.alpha(300),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.internet.domainName()}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc13 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.datatype.number(42),
  website: `www.${faker.internet.domainName()}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc14 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.random.alpha(100),
  website: `www.${faker.internet.domainName()}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc15 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.random.alpha(220)}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc16 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.random.alpha(190)}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc17 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.random.alpha(200)}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc18 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.internet.email()}`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc19 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.datatype.number(32)}.com`,
  facebookProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

const esc20 = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  slug: faker.lorem.slug(),
  email: faker.internet.email(),
  location: faker.address.country(),
  website: `www.${faker.internet.domainName()}`,
  facebookProfile: faker.datatype.number(24),
  twitterProfile: `${faker.name.firstName()}${faker.datatype.number(4)}`,
  biography: faker.lorem.lines(3),
};

describe("Prueba Generacion de Datos sobre GhostApp", function () {
  it("Esc1: Pool a-priori - Actualizar perfil sin Fullname", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc1.fullname,
      esc1.slug,
      esc1.email,
      esc1.location,
      esc1.website,
      esc1.facebookProfile,
      esc1.twitterProfile,
      esc1.biography
    );
  });

  it("Esc2: Pool a-priori - Actualizar perfil sin Slug", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc2.fullname,
      esc2.slug,
      esc2.email,
      esc2.location,
      esc2.website,
      esc2.facebookProfile,
      esc2.twitterProfile,
      esc2.biography
    );
  });

  it("Esc3: Pool a-priori - Actualizar perfil sin Email", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc3.fullname,
      esc3.slug,
      esc3.email,
      esc3.location,
      esc3.website,
      esc3.facebookProfile,
      esc3.twitterProfile,
      esc3.biography
    );
  });

  it("Esc4: Pool a-priori - Actualizar perfil sin Location", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc4.fullname,
      esc4.slug,
      esc4.email,
      esc4.location,
      esc4.website,
      esc4.facebookProfile,
      esc4.twitterProfile,
      esc4.biography
    );
  });

  it("Esc5: Pool a-priori - Actualizar perfil sin Usuario Facebook", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc5.fullname,
      esc5.slug,
      esc5.email,
      esc5.location,
      esc5.website,
      esc5.facebookProfile,
      esc5.twitterProfile,
      esc5.biography
    );
  });

  it("Esc6: Pool a-priori - Actualizar perfil sin Usuario Twitter", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc6.fullname,
      esc6.slug,
      esc6.email,
      esc6.location,
      esc6.website,
      esc6.facebookProfile,
      esc6.twitterProfile,
      esc6.biography
    );
  });

  it("Esc7: Pool a-priori - Actualizar perfil sin Bio", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc7.fullname,
      esc7.slug,
      esc7.email,
      esc7.location,
      esc7.website,
      esc7.facebookProfile,
      esc7.twitterProfile,
      esc7.biography
    );
  });

  it("Esc8: Pool a-priori - Actualizar perfil con Email sin '@'", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc8.fullname,
      esc8.slug,
      esc8.email,
      esc8.location,
      esc8.website,
      esc8.facebookProfile,
      esc8.twitterProfile,
      esc8.biography
    );
  });

  it("Esc9: Pool a-priori - Actualizar perfil con Email sin '.com'", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc9.fullname,
      esc9.slug,
      esc9.email,
      esc9.location,
      esc9.website,
      esc9.facebookProfile,
      esc9.twitterProfile,
      esc9.biography
    );
  });

  it("Esc10: Pool a-priori - Actualizar perfil con Website sin '.com'", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc10.fullname,
      esc10.slug,
      esc10.email,
      esc10.location,
      esc10.website,
      esc10.facebookProfile,
      esc10.twitterProfile,
      esc10.biography
    );
  });

  it("Esc11: Pool aleatorio dinamico - Actualizar perfil con Fullname de 200 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc11.fullname,
      esc11.slug,
      esc11.email,
      esc11.location,
      esc11.website,
      esc11.facebookProfile,
      esc11.twitterProfile,
      esc11.biography
    );
  });

  it("Esc12: Pool aleatorio dinamico - Actualizar perfil con Slug de 300 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc12.fullname,
      esc12.slug,
      esc12.email,
      esc12.location,
      esc12.website,
      esc12.facebookProfile,
      esc12.twitterProfile,
      esc12.biography
    );
  });

  it("Esc13: Pool aleatorio dinamico - Actualizar perfil con Location con numeros", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc13.fullname,
      esc13.slug,
      esc13.email,
      esc13.location,
      esc13.website,
      esc13.facebookProfile,
      esc13.twitterProfile,
      esc13.biography
    );
  });

  it("Esc14: Pool aleatorio dinamico - Actualizar perfil con Location de 100 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc14.fullname,
      esc14.slug,
      esc14.email,
      esc14.location,
      esc14.website,
      esc14.facebookProfile,
      esc14.twitterProfile,
      esc14.biography
    );
  });

  it("Esc15: Pool aleatorio dinamico - Actualizar perfil con Website random string > 200 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc15.fullname,
      esc15.slug,
      esc15.email,
      esc15.location,
      esc15.website,
      esc15.facebookProfile,
      esc15.twitterProfile,
      esc15.biography
    );
  });

  it("Esc16: Pool aleatorio dinamico - Actualizar perfil con Website random string < 200 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc16.fullname,
      esc16.slug,
      esc16.email,
      esc16.location,
      esc16.website,
      esc16.facebookProfile,
      esc16.twitterProfile,
      esc16.biography
    );
  });

  it("Esc17: Pool aleatorio dinamico - Actualizar perfil con Website random string = 200 caracteres", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc17.fullname,
      esc17.slug,
      esc17.email,
      esc17.location,
      esc17.website,
      esc17.facebookProfile,
      esc17.twitterProfile,
      esc17.biography
    );
  });

  it("Esc18: Pool aleatorio dinamico - Actualizar perfil con Website en formato correo", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc18.fullname,
      esc18.slug,
      esc18.email,
      esc18.location,
      esc18.website,
      esc18.facebookProfile,
      esc18.twitterProfile,
      esc18.biography
    );
  });

  it("Esc19: Pool aleatorio dinamico - Actualizar perfil con Website en formato numero", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc19.fullname,
      esc19.slug,
      esc19.email,
      esc19.location,
      esc19.website,
      esc19.facebookProfile,
      esc19.twitterProfile,
      esc19.biography
    );
  });

  it("Esc20: Pool aleatorio dinamico - Actualizar perfil con Usuario Facebbok en formato numero", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      esc20.fullname,
      esc20.slug,
      esc20.email,
      esc20.location,
      esc20.website,
      esc20.facebookProfile,
      esc20.twitterProfile,
      esc20.biography
    );
  });

  it("Esc21: Pool aleatorio dinamico - Actualizar perfil con Usuario Facebbok en formato email", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.internet.email()}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  it("Esc22: Pool aleatorio dinamico - Actualizar perfil con Usuario Facebbok con random String short", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      faker.random.alpha(10),
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  it("Esc23: Pool aleatorio dinamico - Actualizar perfil con Usuario Facebbok con random String long", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      faker.random.alpha(180),
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  it("Esc24: Pool aleatorio dinamico - Actualizar perfil con Bio con random string > 200", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.random.alpha(220)
    );
  });

  it("Esc25: Pool aleatorio dinamico - Actualizar perfil con Bio con random string < 200", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.random.alpha(190)
    );
  });

  it("Esc26: Pool aleatorio dinamico - Actualizar perfil con Bio con random string = 200", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.random.alpha(200)
    );
  });

  it("Esc27: Pool aleatorio dinamico - Actualizar perfil con Bio en formato fecha", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      )}`
    );
  });

  it("Esc28: Pool aleatorio dinamico - Actualizar perfil con Fullname en formato email", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      faker.internet.email(),
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  it("Esc29: Pool aleatorio dinamico - Actualizar perfil con Fullname en formato numero", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      faker.datatype.number(100),
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  it("Esc30: Pool aleatorio dinamico - Actualizar perfil con Fullname en formato fecha", function () {
    loginValid();
    profilePage.getProfilePage();
    profilePage.EnterProfileData(
      `${faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      )}`,
      faker.lorem.slug(),
      faker.internet.email(),
      faker.address.country(),
      `www.${faker.datatype.number(32)}.com`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      `${faker.name.firstName()}${faker.datatype.number(4)}`,
      faker.lorem.lines(3)
    );
  });

  // END
});

function loginValid() {
  cy.visit(`http://localhost:${port}/ghost/`);
  cy.wait(1000);
  loginPage.getEmail().type(userAdmin);
  loginPage.getPassword().type(userPassword);
  loginPage.getPassword().type("{enter}");
  loginPage.getLoginButton().click();
  cy.wait(2500);
}
