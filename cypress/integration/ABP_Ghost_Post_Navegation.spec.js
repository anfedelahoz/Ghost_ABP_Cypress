import LoginPage from "../support/loginPage";
import Dashboard from "../support/dashboardPage";
import PostsPage from "../support/postsPage";
import CreatePostPage from "../support/createPostPage";
import Navegation from "../support/navegation"
import PagesSection from "../support/pagesSection";
import CreateMemberPage from "../support/createMember";
import StaffPage from "../support/staffPage";
const { faker } = require('@faker-js/faker');
const loginPage = new LoginPage();
const dashboardPage = new Dashboard();
const postPage = new PostsPage();
const createPostPage = new CreatePostPage();
const navegation = new Navegation();
const port = 2368;
const userAdmin = "tamayo998@hotmail.com";
const userPassword = "1234567890&";
const esc1 = [
    "Completo la ilusion del val ni",
    "La constante de la inercia, es igual al pot de la entrada + la cap de corto cir entre los elementos"
]
const esc2 = [
    "What is Lorem Ipsum?",
    "Where can I get some",
    "https://github.com/",
    "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
]
const esc3 = [
    "What is Lorem Ipsum?",
    "jorge@example.com" 
]
const esc4 = [
    "What is Lorem Ipsum?",    
    "https://github.com/",
    "Where can I get some",
]
const esc5 = [
    "https://twitter.com/GobAntioquia"
]
const esc6=[
    "Gobernación de Antioquia",
    "En la Gobernación de Antioquia trabajamos #UNIDOSPorLaVida.",
    "Gobernador 2020-2023",
    "https://twitter.com/GobAntioquia"
]
const esc7=[
    "Gobernación de Antioquia",
    "Tierra de la Cordialidad”. Desde este hermoso municipio del Nordeste antioqueño realizaremos las #JornadasDeAcuerdos Participativos y Comunitarios"
]
const esc8=[
    "Codigo HTML",
    "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>"
]
const esc9=[
    "MercadoLibre"
]
const esc10=[
    "MercadoLibre",
    "https://www.mercadolibre.com.co/"
]
const seudo11=[
    faker.name.jobTitle(),
    faker.address.city(),
    faker.address.state(),
]
const seudo12=[
    faker.name.jobTitle(),
    faker.lorem.paragraph(),
    faker.phone.phoneNumber()
]
const seudo13=[
    faker.name.jobTitle(),
    faker.image.avatar()
]
const seudo14=[
    faker.name.jobTitle(),
    faker.image.avatar(),
]
const seudo15=[
    faker.name.jobTitle(),
    faker.image.nature()
]
const seudo16 =[
    faker.name.jobTitle(),
    faker.lorem.paragraph(),
]
describe( `Prueba con Datos Aleatorios sobre Ghost App`, function() {
    function loginValid() {
        cy.visit(`http://localhost:${port}/ghost/`);
        cy.wait(1000);

        loginPage.getEmail().type(userAdmin);

        loginPage.getPassword().type(userPassword);

        loginPage.getPassword().type("{enter}");
        loginPage.getLoginButton().click();
        cy.wait(700);

      }
      it("01_Crear_post_con_titule", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("02_Crear_post_con_titule_content", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().type(faker.lorem.paragraph());
        cy.wait(2500);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("03_Crear_post_con_titule_content_Markdown", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownText().type(faker.name.firstName()+faker.name.lastName()+faker.name.jobTitle());       
        createPostPage.getPostContent().type(faker.lorem.paragraph());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("04_Crear_post_con_titule_content_Markdown_Url_Avatar", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownText().click({ timeOut: 6000 });
        createPostPage.getUrlSelect().click({ timeOut: 6000 });  
        createPostPage.getUrlSelect().type(faker.image.avatar());      
        createPostPage.getPostContent().type(faker.lorem.paragraph());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("05_Crear_post_con_Button_Text_Url", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getButtonText().type(faker.name.jobTitle());
        createPostPage.getButtonUrl().type(faker.image.avatar());
        createPostPage.getPostContent().type(faker.lorem.paragraph());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("06_Crear__Email_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailFormat().click({ timeOut: 6000 });
        createPostPage.getEmailText().type(faker.internet.email()+faker.name.firstName()+faker.name.lastName()+faker.lorem.paragraph());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("07_Crear_Bookmark_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkText().type(faker.image.nature());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("08_Crear_HTML_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLText().type(faker.lorem.paragraph());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("09_Crear_Email_Call_to_Action_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallText().type(faker.lorem.paragraph());
        createPostPage.getPostContent().type(faker.name.jobTitle());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("10_Crear_Callout_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getCalloutFormat().click({ timeOut: 6000 });
        createPostPage.getCalloutText().type(faker.lorem.paragraph());
        createPostPage.getCalloutColor().click({ timeOut: 6000 });
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("11_Crear_Toggle_Post", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(faker.name.jobTitle());
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getToggleFormat().click({ timeOut: 6000 });
        createPostPage.getToggleText1().type(faker.address.city());
        createPostPage.getToggleText2().type(faker.address.state());
        createPostPage.getPostContent().type(faker.company.companyName());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("12_Crear_Post_Titule_Conten_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc1[0]);
        createPostPage.getPostContent().type(esc1[1]);
        cy.wait(2500);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("13_Crear_post_con_Button_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc2[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getButtonText().type(esc2[1]);
        createPostPage.getButtonUrl().type(esc2[2]);
        createPostPage.getPostContent().type(esc2[3]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("14_Crear__Email_Post_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc3[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailFormat().click({ timeOut: 6000 });
        createPostPage.getEmailText().type(esc3[1]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("15_Crear_post__Markdown_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc4[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownText().click({ timeOut: 6000 });
        createPostPage.getUrlSelect().click({ timeOut: 6000 });  
        createPostPage.getUrlSelect().type(esc4[1]);      
        createPostPage.getPostContent().type(esc4[2]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("16_Crear_post_Twitter", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc4[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getTwitterFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getTwitterFormat().click({ timeOut: 6000 });
        createPostPage.getTwitterText().type(faker.image.nature());
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("17_Crear_post_Youtube", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc4[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getYoutubeFormat().click({ timeOut: 6000 });
        createPostPage.getYoutubeText().type(esc5[0]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("18_Crear_Toggle_Post_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc6[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getToggleFormat().click({ timeOut: 6000 });
        createPostPage.getToggleText1().type(esc6[1]);
        createPostPage.getToggleText2().type(esc6[2]);
        createPostPage.getPostContent().type(esc6[3]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("19_Crear_Callout_Post_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc7[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getCalloutFormat().click({ timeOut: 6000 });
        createPostPage.getCalloutText().type(esc7[1]);
        createPostPage.getCalloutColor().click({ timeOut: 6000 });
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
    });
      it("20_Crear_HTML_Post_Apriori", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(esc8[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLFormat().click({ timeOut: 6000 });
        createPostPage.getHTMLText().type(esc8[1]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("21_Crear_Navegation_Name", function () {
        loginValid();
        cy.wait(3500);
        cy.visit(`http://localhost:2368/ghost/#/settings/navigation`);
        cy.wait(2500);        
        navegation.getNameLabel().click({ timeOut: 6000 });
        navegation.getNameLabel().type(faker.name.jobTitle());
        navegation.getSaveNavegation().click({ timeOut: 6000 });
      });
      it("22_Crear_Navegation_Url", function () {
        loginValid();
        cy.wait(3500);
        cy.visit(`http://localhost:2368/ghost/#/settings/navigation`);
        cy.wait(2500);        
        navegation.getNameLabel().click({ timeOut: 6000 });
        navegation.getNameLabel().type(faker.name.jobTitle());
        navegation.getUrlNavegation().click({ timeOut: 6000 });
        navegation.getUrlNavegation().type(faker.image.avatar());
        navegation.getSaveNavegation().click({ timeOut: 6000 });
      });
      it("23_Crear_Navegation_Name_Apriori", function () {
        loginValid();
        cy.wait(3500);
        cy.visit(`http://localhost:2368/ghost/#/settings/navigation`);
        cy.wait(2500);        
        navegation.getNameLabel().click({ timeOut: 6000 });
        navegation.getNameLabel().type(esc9[0]);
        navegation.getSaveNavegation().click({ timeOut: 6000 });
      });
      it("24_Crear_Navegation_url_Apriori", function () {
        loginValid();
        cy.wait(3500);
        cy.visit(`http://localhost:2368/ghost/#/settings/navigation`);
        cy.wait(2500);        
        navegation.getNameLabel().click({ timeOut: 6000 });
        navegation.getNameLabel().type(esc10[0]);
        navegation.getUrlNavegation().click({ timeOut: 6000 });
        navegation.getUrlNavegation().type(esc10[1]);
        navegation.getSaveNavegation().click({ timeOut: 6000 });
      });
      it("25_Crear_Toggle_Post_seudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo11[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getToggleFormat().click({ timeOut: 6000 });
        createPostPage.getToggleText1().type(seudo11[1]);
        createPostPage.getToggleText2().type(seudo11[2]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("26_Crear_post_con_titule_dos_content_SeudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo12[0]);
        createPostPage.getPostContent().type(seudo12[1]);
        createPostPage.getPostContent().type(seudo12[2]);
        cy.wait(2500);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        cy.wait(2000);
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("27_Crear_post_con_titule_content_Markdown__Avatar_seudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo13[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getPostContent().click({ force: true });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownFormat().click({ timeOut: 6000 });
        createPostPage.getMarkdownText().click({ timeOut: 6000 });
        createPostPage.getUrlSelect().click({ timeOut: 6000 });  
        createPostPage.getUrlSelect().type(seudo13[1]);      
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("28_Crear_post_con_Button_Text_Url_seudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo14[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getButtonFormat().click({ timeOut: 6000 });
        createPostPage.getButtonText().type(seudo14[0]);
        createPostPage.getButtonUrl().type(seudo14[1]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("29_Crear_Bookmark_Post_seudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo15[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkFormat().click({ timeOut: 6000 });
        createPostPage.getBookmarkText().type(seudo15[1]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      it("30_Crear_Email_Call_to_Action_Post_seudoAleatorio", function () {
        loginValid();
        cy.wait(3500);
        dashboardPage.getPostsMenu().click({ timeOut: 6000 });
        cy.wait(2500);
        postPage.getNewPostButton().click({ timeOut: 6000 });
        createPostPage.getPostTitle().type(seudo16[0]);
        createPostPage.getPostContent().click({ force: true });
        cy.wait(2500);
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallFormat().click({ timeOut: 6000 });
        createPostPage.getPostFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallFormat().click({ timeOut: 6000 });
        createPostPage.getEmailCallText().type(seudo16[1]);
        createPostPage.getFirstPublishButton().click({ timeOut: 6000 });
        createPostPage.getSecondPublishButton().click({ timeOut: 6000 });
        createPostPage.getThirdPublishButton().click({ timeOut: 6000 });
      });
      
})