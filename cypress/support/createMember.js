class CreateMemberPage {
  getMembersMenu() {
    return cy.get('[href="#/members/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberButton() {
    return cy.get("a").contains("New member");
  }

  getNewMemberName() {
    return cy.get('[name="name"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberEmail() {
    return cy.get('[name="email"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewMemberNote() {
    return cy.get('[name="note"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }


  

  getNewMemberSaveButton() {
    return cy
      .get("span")
      .contains("Save")
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text);
      });
  }


  getExistMensajeEmailDuplicado(){
    return cy.get("div").contains("Validation error, cannot save member. Member already exists. Attempting to add member with existing email address");
  
  }
  getExistMensajeExcedioCaracteresNota(){
    return cy.get("p").contains("Note is too long.");
  
  }
  getExistMensajeMensajeInvalido(){
    return cy.get('[class="form-group max-width error ember-view"]' );
    
  
  }
  

  getNewMemberLabel() {
    return cy.get('[class="ember-power-select-trigger-multiple-input"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }

  getNewLabelAddButon(){
    return cy.get('[class="ember-power-select-option"]').contains("Add");  

  }
  getNewLabelCheckSubscripcion(){
    return cy.get('span[class="input-toggle-component"]');  ;  

  }

}

export default CreateMemberPage;
