import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../Pages/DemoqaPageobjects";

  Given ('Im on testing page',function (){
  cy.visit ('https://demoqa.com/alertsWindows')
  })
  When('Im read tab name', function (){
  demoqapage.GetChecktabname().should('contain', 'Alerts, Frame & Windows')
  })
  When('Click on tab', function (){
  demoqapage.GetChecktabname().click();
   })
  Then('Im see Browser Window tab', function (){
  demoqapage.GetCheckbrowserwindowtabname().should('contain', 'Browser Windows')
   })
 
   Given('Browser Window tab',function (){
      cy.visit ('https://demoqa.com/alertsWindows')
   })
   When('I click on Browser Window tab', function (){
      demoqapage.GetCheckbrowserwindowtabname().click();
   })
   Then ('Open new browser window page',function (){
      cy.visit ('https://demoqa.com/browser-windows');
   })

   Given ('New tab btn test',function (){
      cy.visit ('https://demoqa.com/browser-windows')
       })
    When('I check New Tab btn', function (){
       demoqapage.GetChecknewtabbtn().should('contain', 'New Tab');
    })
    When('Click New Tab btn', function (){
       demoqapage.GetChecknewtabbtn().click();
    })
   Then ('Open sample page',function (){
        cy.visit ('https:demoqa.com/sample');
   })

  Given ('New window btn test',function (){
     cy.visit ('https://demoqa.com/browser-windows')
     })
 When ('I check New Window btn',function(){
     demoqapage.GetChecknewwindowbtn().should('contain', 'New Window');
 })
 When('Click New Window btn', function (){
     demoqapage.GetChecknewwindowbtn().click();
 })
 Then ('Open sample web page',function (){
     cy.visit ('https:demoqa.com/sample');
 })

  Given ('New window masage btn test',function (){
       cy.visit ('https://demoqa.com/browser-windows')
      })
    When ('I check New Window Massage btn',function(){
       demoqapage.GetChecknewwindowmessagebtn().should('contain', 'New Window Message');
       })
   When ('Click New Window Massage btn',function(){
     demoqapage.GetChecknewwindowmessagebtn().click();
      })
   When ('Open about blank  page',function(){
    cy.reload()
    //    cy.visit('about.blank')
      })
    

 Given('Alert tab',function (){
    cy.visit ('https://demoqa.com/alertsWindows')
 })
 When ('I check Alert tab',function(){
         demoqapage.GetCheckalerttab().should('contain', 'Alert');
 })
  When ('Click on Alert tab',function(){
         demoqapage.GetCheckalerttab().click();
 })
   Then ('Open Alert page',function(){
        cy.visit ('https://demoqa.com/alerts')
   })
   When ('Im check text before first btn',function(){
         demoqapage.GetChecktextbeforefirstbtn().should('contain','Click Button to see alert');
 })
   When ('Im click first btn', function (){
         demoqapage.GetCheckalertfirstbtn().click();
 })
//    Then ('Allert massage',function(){
//     demoqapage.GetCheckalertfirstbtn().click();
//    })
  When ('Im check text before second btn',function(){
         demoqapage.GetChecktextbeforesecondbtn().should('contain','On button click, alert will appear after 5 second');
 })
  When ('Im click second btn',function(){
         demoqapage.GetCheckalertsecondbtn().click();
 })
//   Then ('Aller massage in 5 second',function(){
//         demoqapage.GetChecktextbeforethirdbt()
//   })
  When ('Im check text before third btn',function(){
         demoqapage.GetChecktextbeforethirdbtn().should('contain','On button click, confirm box will appear');
 })
  When ('Im click third btn',function(){
         demoqapage.GetCheckalertthirdbtn().click();
 })
//   Then ('Look alert Do you confir action',function(){
//   })
  When ('Im check text before fourt btn',function(){
         demoqapage.GetChektextbeforefourthbtn().should('contain','On button click, prompt box will appear');
 })
  When ('Im click fourth btn',function(){
         demoqapage.GetCheckalertfourthbtn().click();
 })
//   Then ('Look Alert Please enter your name'function(){
//   })

Given ('Frames tab',function (){
     cy.visit ('https://demoqa.com/alertsWindows')
     })
 When ('I check Frames tab',function(){
       demoqapage.GetCheckframestabname().should('contain', 'Frames')
     })
 When ('Click on Frames tab',function(){
      demoqapage.GetCheckframestabname().click();
     })
 Then ('Open Frames page',function (){
     cy.visit ("https://demoqa.com/frames")
 })
 When ('I check page title', function() {
     demoqapage.GetCheckframespagetitle().should('be.be.visible')
 })
 Then ('Title should be right', function() {
     demoqapage.GetCheckframespagetitle().should('contain','Frames')
 })
 When ('I read page body text', function() {
     demoqapage.GetCheckframespagebodytext().should('be.be.visible')
 })
     Then ('Body text should be right', function() {
     demoqapage.GetCheckframespagebodytext().should('contain','Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below')
 })   
  When('I read first frame',function(){
       demoqapage.GetCheckfirstframe().should('be.visible');
       })
//   Then('First frame title should be right',function(){
//        demoqapage.GetCheckfirstframe().should('contain','This is a sample page');  
//    })
  When('I read second frame',function(){
       demoqapage.GetChecksecondframe().should('be.visible');
  })
//   Then('Second frame title should be right',function(){
//       demoqapage.GetChecksecondframe().should('contain','This is a sample page')
//   })


 Given ('Nested Frames tab',function (){
     cy.visit ('https://demoqa.com/alertsWindows')
     })
 When('I check Nested Frames tab',function (){
     demoqapage.GetChecknestedframestabname().should('contain', 'Nested Frames');
 })
 When('Click on Nested Frames tab',function (){
     demoqapage.GetChecknestedframestabname().click();
 })
 Then ('Open Nested Frames tab page',function(){
     cy.visit ('https://demoqa.com/nestedframes')
 })
 When('I read Nested Frame page title',function (){
     demoqapage.GetChecknestedframestitlename().should('be.visible')
 })
 Then('Titile must be right',function (){
    demoqapage.GetChecknestedframestitlename().should('contain', 'Nested Frames')
 })
 When('I read Neked Frames page body text',function (){
     demoqapage.GettChecknestedframespagebodytext().should('be.visible')
 })
  Then('Text should be absolutely right',function (){
     demoqapage.GettChecknestedframespagebodytext().should('contain','Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.');
  })

 Given ('Modal Diologs tab',function(){
     cy.visit ('https://demoqa.com/nestedframes')
 })
 When('I check Modal Diologs tab',function (){
     demoqapage.GetCheckmodaldiologstab().should('be.visible')
 })
 When('Click on Modal Diologs tab',function (){
     demoqapage.GetCheckmodaldiologstab().click();
 })
 Then('Open Modal Diologs tab page',function (){
     cy.visit ('https://demoqa.com/modal-dialogs')
 })
 When('I see smal diologs btn',function (){
    demoqapage.GetChecksmallmodalbtn().should('be.visible')
 })
 When('Read btn name',function (){
     demoqapage.GetChecksmallmodalbtn().should('contain', 'Small modal')
 })
 When('Click at small diologs btn',function (){
     demoqapage.GetChecksmallmodalbtn().click();
 })
Then ('Allert small massage',function(){
    demoqapage.GetChecksmallalertmassage().should('contain','This is a small modal. It has very less content')
})
Then ('Close small modal',function(){
    demoqapage.GetClosesmallmodal().click();
 })
 When('I see large diologs btn',function (){
     demoqapage.GetChecklargemodalbtn().should('be.visible');
 })
 When('Read bttn name',function (){
     demoqapage.GetChecklargemodalbtn().should('contain','Large Modal');
 })
 When('Click at large diologs btn',function (){
     demoqapage.GetChecklargemodalbtn().click();
 })
 Then ('Allert large massage',function(){
     demoqapage.GetChecklargealertmassage().should("contain","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
 });
 Then ('Close large modal',function(){
     demoqapage.GetCloselargemodal().click();
 })