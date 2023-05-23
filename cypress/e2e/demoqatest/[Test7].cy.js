import {Given, When, Then, And,} from "@badeball/cypress-cucumber-preprocessor";
import { demoqapage } from "../../Pages/DemoqaPageobjects";
import { demoqaDate } from "../../support/DataBase";
When("I check Frames tab", function () {
  demoqapage.getCheckframestabname().should("contain", demoqaDate.framesTab);
});
When("Click on Frames tab", function () {
  demoqapage.getCheckframestabname().click();
});
Then("Open Frames page", function () {
  cy.visit(Cypress.env("framespageurl"));
});
When("I check page title", function () {
  demoqapage.getCheckframespagetitle().should("be.visible");
});
Then("Title should be right", function () {
  demoqapage
    .getCheckframespagetitle()
    .should("contain", demoqaDate.framesPagetitle);
});
When("I read page body text", function () {
  demoqapage.getCheckframespagebodytext().should("be.visible");
});
Then("Body text should be right", function () {
  demoqapage
    .getCheckframespagebodytext()
    .should("contain", demoqaDate.framesPagebodytext);
});
When("I read first frame", function () {
  demoqapage.getCheckfirstframe().should("be.visible");
  cy.wait(5000);
});
Then("First frame title should be right", function () {
  cy.visit(Cypress.env('samplepageurl'));
  demoqapage.getChecksamplepageheading()
    .invoke("text")
    .then((text) => {
      expect(text).to.include(text);
    });
    cy.go("back")
});
