class PagesSection {
  getPageMenu() {
    return cy.get('[href="#/pages/"]').then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }
  getNewPageButton() {
    
    return cy.get("span").contains("New page");
  }
  // getNewPageButton() {
  //   return cy.get('[href="#/editor/page/"]').then(($text) => {
  //     var text = $text.get(0);
  //     cy.wrap(text).click({ force: true });
  //   });
  // }
  getPageTitle() {
    return cy.get("textarea").then(($text) => {
      var text = $text.get(0);
      cy.wrap(text);
    });
  }
  getPageContent() {
    return cy
      .get('[data-placeholder="Begin writing your page..."]')
      .then(($text) => {
        var text = $text.get(0);
        cy.wrap(text);
      });
  }
  getFirstPublishButton() {
    return cy.get("span").contains("Publish");
  }
  getSecondPublishButton() {
    return cy.get("button > span").contains("Publish");
  }
  getThirdPublishButton() {
    return cy.get("button").contains("Publish");
  }

  getNOFirstPublishButton() {
    return cy.get("span").should('not.contain', 'Publish');
  }
 

  setPageTitle2(valorContenido) {
    
    return cy.get("textarea").then(($text) => {
      cy.log("No puede existir una pagina con titulo vacio:" + valorContenido);
      let esValido=validarContenidoIsNullEmptyUndefined(valorContenido);     
      expect(esValido).be.false;
    });
  }

    
  setPageContent2(valorContenido) {
    return cy
      .get('[data-placeholder="Begin writing your page..."]')
      .then(($text) => {
        cy.log("No puede existir una pagina con contenido vacio '',null o undefined:" + valorContenido);
        let esValido=validarContenidoIsNullEmptyUndefined(valorContenido);
        expect(esValido).be.false;
      });
  }
    
  getPageFormatProduct() {
    return cy.get('[data-placeholder="Begin writing your page..."]');
  }

  getPageAccessDropDown() {
    return cy.get("select");
  }

  getPageYoutubeFormat() {
    return cy.get('[title="YouTube"]');
  }

  getPageYoutubeText() {
    return cy.get(".miw-100");
  }

  getPagePostFormat() {
    return cy.get(".koenig-plus-menu-button > .w4");
  }

  getPageHTMLFormat() {
    return cy.get('[title="HTML"]');
  }

  getPageHTMLText() {
    return cy.get(".CodeMirror-line");
  }

  getPageMessageUrlInvalid(){
    return cy.get("span").contains("There was an error when parsing the URL.");
  }


  getPageTwitterFormat() {
    return cy.get('[title="Twitter"]');
  } 
  getPageTwitterText() {
    return cy.get(".miw-100");
  }


  getPageBookmarkFormat() {
    return cy.get('[title="Bookmark"]');
  }


  getPageBookmarkText() {
    return cy.get(".miw-100");
  }


  getPageButtonFormat() {
    return cy.get('[title="Button"]');
  }
  getPageButtonText() {
    return cy.get("#button-text-input");
  }
  getPageButtonUrl() {
    return cy.get("#button-url-input");
  }

  getPageMarkdownFormat() {
    return cy.get('[title="Markdown"]');
  }
  getPageMarkdownText() {
    return cy.get(".CodeMirror-scroll");
  }

}

function validarContenidoIsNullEmptyUndefined(valorContenido){
  let esValido=false;
  if(valorContenido != null & valorContenido != undefined & valorContenido != "" ){
    esValido=true;  
  }
  return esValido;

}

export default PagesSection;
