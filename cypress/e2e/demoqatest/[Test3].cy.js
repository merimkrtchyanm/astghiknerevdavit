import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

When('I click at Browser Window tab', function (){
    demoqapage.getCheckbrowserwindowtabname().click();
 })
When('I check New Tab btn', function (){
    demoqapage.getChecknewtabbtn().should('contain',demoqaDate.newTabbtn);
 })
 When('Click New Tab btn', function (){
    demoqapage.getChecknewtabbtn().click();
 })
Then ('Open sample page',function (){
     cy.visit (Cypress.env('samplepageurl'));
})