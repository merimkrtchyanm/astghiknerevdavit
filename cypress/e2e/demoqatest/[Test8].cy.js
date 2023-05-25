import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

When('I check Nested Frames tab',function (){
    demoqapage.getChecknestedframestabname().should('contain',demoqaDate.nestedFramestab);
})
When('Click on Nested Frames tab',function (){
    demoqapage.getChecknestedframestabname().click();
})
Then ('Open Nested Frames tab page',function(){
    cy.visit (Cypress.env('nestedframespageurl'))
})
When('I read Nested Frame page title',function (){
    demoqapage.getChecknestedframestitlename().should('be.visible')
})
Then('Titile must be right',function (){
   demoqapage.getChecknestedframestitlename().should('contain',demoqaDate.nestedFramespagetitle)
})
When('I read Neked Frames page body text',function (){
    demoqapage.gettChecknestedframespagebodytext().should('be.visible')
})
 Then('Text should be absolutely right',function (){
    demoqapage.gettChecknestedframespagebodytext().should('contain',demoqaDate.nestedFramespagebodytext);
 })
