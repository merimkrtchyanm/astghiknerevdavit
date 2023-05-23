import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

     When('I click the Browser Window tab', function (){
        demoqapage.getCheckbrowserwindowtabname().click();
     })
     Then ('Open new browser window page',function (){
        cy.visit(Cypress.env('windowpageurl'));
     })