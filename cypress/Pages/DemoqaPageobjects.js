class  demoqaPage{
    visit(){
        cy.visit(Cypress.env('globalUrl'))
    }
    visit(){
        cy.visit(Cypress.env('windowpageurl'))
    }
    visit(){
        cy.visit(Cypress.env('samplepageurl'))
    }
    visit(){
        cy.visit(Cypress.env('alertpageurl'))
    }
    visit(){
        cy.visit(Cypress.env('framespageurl'))
    }
    visit(){
        cy.visit(Cypress.env('nestedframespageurl'))
    }
    visit(){
        cy.visit(Cypress.env('modaldialogspageurl')) 
    }
    visit(){
         cy.visit(Cypress.env('alertswindowpageurl'))
    }
getClickonbeginingtabondemoqa(){
    return cy.get ('.card-body')
}
getChecktabname(){
    return cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text');
}
getCheckbrowserwindowtabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-0 > .text')
}
getChecknewtabbtn(){
    return cy.get ('#tabButton');
}
getChecknewwindowbtn(){
    return cy.get ("#windowButton")
}
getChecknewwindowmessagebtn(){
    return cy.get('#messageWindowButton')
}
getCheckalerttab(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-1')
}
getChecktextbeforefirstbtn(){
    return cy.get (':nth-child(1) > .col-md-6 > .mr-3')
}
getCheckalertfirstbtn(){
    return cy.get ('#alertButton')
}
getChecktextbeforesecondbtn(){
    return cy.get (':nth-child(2) > .col-md-6 > .mr-3')
}
getCheckalertsecondbtn(){
    return cy.get('#timerAlertButton')
}
getChecktextbeforethirdbtn(){
    return cy.get (':nth-child(3) > .col-md-6 > .mr-3')
}
getCheckalertthirdbtn(){
    return cy.get ('#confirmButton')
}
getChektextbeforefourthbtn(){
    return cy.get (':nth-child(4) > .col-md-6 > .mr-3');
}
getCheckalertfourthbtn(){
    return cy.get ('#promtButton')
}
getCheckframestabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-2')
}
getCheckframespagetitle(){
    return cy.get ('.main-header')
}
getCheckframespagebodytext(){
    return cy.get('#framesWrapper > :nth-child(1)')
}
getCheckfirstframe(){
    return cy.get ('#frame1')
}
getChecksecondframe(){
    return cy.get ('#frame2')
}
getChecknestedframestabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-3 > .text')
}
getChecknestedframestitlename(){
    return cy.get ('.main-header')
}
gettChecknestedframespagebodytext(){
    return cy.get('#framesWrapper > :nth-child(1)')
}
getCheckmodaldiologstab(){
    return cy.get (":nth-child(3) > .element-list > .menu-list > #item-4")
}
getChecksmallmodalbtn(){
    return cy.get ('#showSmallModal')
}
getChecksmallalertmassage(){
    return cy.get ('.modal-body')
}
getClosesmallmodal(){
    return cy.get ('#closeSmallModal')
}
getChecklargemodalbtn(){
    return cy.get ('#showLargeModal')
}
getChecklargealertmassage(){
    return cy.get ('p')
}
getCloselargemodal(){
    return cy.get ('#closeLargeModal')
}
getChecksamplepageheading(){
    return cy.get ('#sampleHeading')
}
}


export const demoqapage = new demoqaPage ()