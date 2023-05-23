import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

When('I pres on Browser Window tab', function (){
    demoqapage.getCheckbrowserwindowtabname().click();
 })
 When ('I check New Window Massage btn',function(){
    demoqapage.getChecknewwindowmessagebtn().should('contain',demoqaDate.newWindowmassagebtn);
    })
When ('Click New Window Massage btn',function(){
  demoqapage.getChecknewwindowmessagebtn().click();
   })
When ('Open about blank  page',function(){
 cy.reload()
 //    cy.visit('about.blank')
   })