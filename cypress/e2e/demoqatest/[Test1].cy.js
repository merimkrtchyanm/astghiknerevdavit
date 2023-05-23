import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"
  Given ('Im on Demoqa page',function (){
    cy.visit(Cypress.env('globalUrl'))
  })
  When ("Im click on Alerts, Frame & Windows btn",function(){
    demoqapage.getClickonbeginingtabondemoqa().eq(2).click()
  })
  Then('Open Alerts, Frame & Windows page',function(){
    cy.visit(Cypress.env('alertswindowpageurl'))
  })
  When('Im read tab name', function (){
  demoqapage.getChecktabname().should('contain',demoqaDate.alertFrameandwindowstabname)
  })
  When('Click on tab', function (){
  demoqapage.getChecktabname().click();
   })
  Then('Im see Browser Window tab', function (){
  demoqapage.getCheckbrowserwindowtabname().should('contain',demoqaDate.browserWindowsbtn)
   })