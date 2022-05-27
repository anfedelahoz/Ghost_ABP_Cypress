describe("Ghost App con Monkey", function () {
  it("visits Ghost App and survives monkeys", function () {
    cy.visit("http://localhost:2368/ghost/#/dashboard");
    cy.wait(5000);
    login();
    cy.wait(2500);
    randomEvent(12);
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Main function to execute a defined random event
function randomEvent(monkeysLeft) {
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
    monkeysLeft = monkeysLeft - 1;
    const Events = [clickRandomButton, clickRandomLink];
    var event = getRandomItem(Events);
    cy.log(`Evento actual #${monkeysLeft + 1}:  ${event.name}`);
    event();
    cy.wait(4000);
    randomEvent(monkeysLeft);
  }
}

// All Random Events
function clickRandomButton() {
  cy.get("button").then(($buttons) => {
    var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
    if (!Cypress.dom.isHidden(randomButton)) {
      cy.wrap(randomButton).click({ force: true });
    }
  });
}

function clickRandomLink() {
  cy.get("a").then(($links) => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if (!Cypress.dom.isHidden(randomLink)) {
      cy.wrap(randomLink).click({ force: true });
    }
  });
}

// function typeRandomTextField() {
//   cy.get("input").then(($textFields) => {
//     var randomTextField = $textFields.get(getRandomInt(0, $textFields.length));
//     cy.wrap(randomTextField).type("de ", { force: true });
//   });
// }

// function selectRandomCombo() {
//   cy.get("input").then(($textFields) => {
//     var randomTextField = $textFields.get(0);
//     cy.wrap(randomTextField)
//       .clear({ force: true })
//       .type("Universidad", { force: true });
//   });

//   cy.wait(1800);
//   cy.get("span")
//     .children()
//     .then(($combos) => {
//       var randomCombo = $combos.get(getRandomInt(0, $combos.length));
//       cy.wrap(randomCombo).click({ force: true });
//     });
// }
function login() {
  cy.visit("http://localhost:2368/ghost/");
  cy.wait(1000);
  cy.get("#ember7").clear();
  cy.get("#ember7").type("andelahozg@gmail.com");
  cy.get("#ember9").clear();
  cy.get("#ember9").type("Centro2021#{enter}");
  cy.get("#ember11").click();
}
