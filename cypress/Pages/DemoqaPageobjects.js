class  demoqaPage{
    visit(){
        cy.visit ('https://demoqa.com/alertsWindows')
    }
GetChecktabname(){
    return cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text');
}
GetCheckbrowserwindowtabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-0 > .text')
}
GetChecknewtabbtn(){
    return cy.get ('#tabButton');
}
GetChecknewwindowbtn(){
    return cy.get ("#windowButton")
}
GetChecknewwindowmessagebtn(){
    return cy.get('#messageWindowButton')
}
GetCheckalerttab(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-1')
}
GetChecktextbeforefirstbtn(){
    return cy.get (':nth-child(1) > .col-md-6 > .mr-3')
}
GetCheckalertfirstbtn(){
    return cy.get ('#alertButton')
}
GetChecktextbeforesecondbtn(){
    return cy.get (':nth-child(2) > .col-md-6 > .mr-3')
}
GetCheckalertsecondbtn(){
    return cy.get('#timerAlertButton')
}
GetChecktextbeforethirdbtn(){
    return cy.get (':nth-child(3) > .col-md-6 > .mr-3')
}
GetCheckalertthirdbtn(){
    return cy.get ('#confirmButton')
}
GetChektextbeforefourthbtn(){
    return cy.get (':nth-child(4) > .col-md-6 > .mr-3');
}
GetCheckalertfourthbtn(){
    return cy.get ('#promtButton')
}
GetCheckframestabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-2')
}
GetCheckframespagetitle(){
    return cy.get ('.main-header')
}
GetCheckframespagebodytext(){
    return cy.get('#framesWrapper > :nth-child(1)')
}
GetCheckfirstframe(){
    return cy.get ('#frame1')
}
GetChecksecondframe(){
    return cy.get ('#frame2')
}
GetChecknestedframestabname(){
    return cy.get (':nth-child(3) > .element-list > .menu-list > #item-3 > .text')
}
GetChecknestedframestitlename(){
    return cy.get ('.main-header')
}
GettChecknestedframespagebodytext(){
    return cy.get('#framesWrapper > :nth-child(1)')
}
GetCheckmodaldiologstab(){
    return cy.get (":nth-child(3) > .element-list > .menu-list > #item-4")
}
GetChecksmallmodalbtn(){
    return cy.get ('#showSmallModal')
}
GetChecksmallalertmassage(){
    return cy.get ('.modal-body')
}
GetClosesmallmodal(){
    return cy.get ('#closeSmallModal')
}
GetChecklargemodalbtn(){
    return cy.get ('#showLargeModal')
}
GetChecklargealertmassage(){
    return cy.get ('p')
}
GetCloselargemodal(){
    return cy.get ('#closeLargeModal')
};
}


export const demoqapage = new demoqaPage