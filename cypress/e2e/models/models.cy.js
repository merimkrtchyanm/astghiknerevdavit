import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the Modal Dialogs page', () => {
  cy.visit('https://demoqa.com/modal-dialogs');
});

When('I click on the {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
});

Then('I should see the small modal dialog', () => {
  cy.get('#showSmallModal').should('be.visible');
});

Then('I should see the large modal dialog', () => {
  cy.get('#showLargeModal').should('be.visible');
});

Then('I close the modal dialog', () => {
  cy.get('.modal-footer button').contains('Close').click();
});

