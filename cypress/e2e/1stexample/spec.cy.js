
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", function () {
    cy.visit("http://www.uitestingplayground.com/clientdelay");
    cy.get('.navbar-brand').click()
    cy.get('#title').contains('UI Test Automation')
  });
  
  When("I enter my valid credentials", function () {
    cy.get(':nth-child(1) > :nth-child(1) > h3 > a').click()
  });
  
  When("click on the login button", function () {
   
  });
  
  Then("I should be redirected to the dashboard page", function () {
    
  });

  