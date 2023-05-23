import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate} from "../../support/DataBase"

When ('I check Alert tab',function(){
    demoqapage.getCheckalerttab().should('contain',demoqaDate.alertTab);
})
When ('Click on Alert tab',function(){
    demoqapage.getCheckalerttab().click();
})
Then ('Open Alert page',function(){
   cy.visit(Cypress.env('alertpageurl'))
})
When ('Im check text before first btn',function(){
    demoqapage.getChecktextbeforefirstbtn().should('contain',demoqaDate.textBeforefirstbtn);
})
When ('Im click first btn', function (){
    demoqapage.getCheckalertfirstbtn().click();
})
//   Then ('Allert massage',function(){
//    demoqapage.getCheckalertfirstbtn().click();
    // })
When ('Im check text before second btn',function(){
    demoqapage.getChecktextbeforesecondbtn().should('contain',demoqaDate.textBeforeswcondbtn);
})
When ('Im click second btn',function(){
    demoqapage.getCheckalertsecondbtn().click();
})
//    Then ('Aller massage in 5 second',function(){
        //  demoqapage.getChecktextbeforethirdbt()
//    })
When ('Im check text before third btn',function(){
    demoqapage.getChecktextbeforethirdbtn().should('contain',demoqaDate.textBeforethirddbtn);
})
When ('Im click third btn',function(){
    demoqapage.getCheckalertthirdbtn().click();
})
   Then ('Look alert Do you confir action',function(){
   })
When ('Im check text before fourt btn',function(){
    demoqapage.getChektextbeforefourthbtn().should('contain',demoqaDate.textBeforefourbtn);
})
When ('Im click fourth btn',function(){
    demoqapage.getCheckalertfourthbtn().click();
})
  Then ('Look Alert Please enter your name',function(){
   })