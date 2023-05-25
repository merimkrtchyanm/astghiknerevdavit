import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

When('I check Modal Diologs tab',function (){
    demoqapage.getCheckmodaldiologstab().should('be.visible')
})
When('Click on Modal Diologs tab',function (){
    demoqapage.getCheckmodaldiologstab().click();
})
Then('Open Modal Diologs tab page',function (){
   cy.visit(Cypress.env('modaldialogspageurl')) 
})
When('I see smal diologs btn',function (){
   demoqapage.getChecksmallmodalbtn().should('be.visible')
})
When('Read btn name',function (){
    demoqapage.getChecksmallmodalbtn().should('contain',demoqaDate.smallModalbtn)
})
When('Click at small diologs btn',function (){
    demoqapage.getChecksmallmodalbtn().click();
})
Then ('Allert small massage',function(){
   demoqapage.getChecksmallalertmassage().should('contain',demoqaDate.smallModalalerttext)
})
Then ('Close small modal',function(){
   demoqapage.getClosesmallmodal().click();
})
When('I see large diologs btn',function (){
    demoqapage.getChecklargemodalbtn().should('be.visible');
})
When('Read bttn name',function (){
    demoqapage.getChecklargemodalbtn().should('contain',demoqaDate.largeModalbtn);
})
When('Click at large diologs btn',function (){
    demoqapage.getChecklargemodalbtn().click();
})
Then ('Allert large massage',function(){
    demoqapage.getChecklargealertmassage().should("contain",demoqaDate.largeModalalerttext)
});
Then ('Close large modal',function(){
    demoqapage.getCloselargemodal().click();
})