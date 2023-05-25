import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"
When('I click on Browser Window tab', function (){
   demoqapage.getCheckbrowserwindowtabname().click();
})
When('I press on Browser Window tab', function (){
    demoqapage.getCheckbrowserwindowtabname().click();
 })
 When ('I check New Window btn',function(){
   demoqapage.getChecknewwindowbtn().should('contain',demoqaDate.newWindowbtn);
})
When('Click New Window btn', function (){
   demoqapage.getChecknewwindowbtn().click();
})
Then ('Open sample web page',function (){
   cy.visit(Cypress.env('samplepageurl'));
})
