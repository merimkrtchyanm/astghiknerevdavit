Feature: Automation of Modal Dialogs

  Scenario: Verify Small model case
    Given I open the Modal Dialogs page
    When I click on the "Small modal" button
    Then I should see the small modal dialog
    And I close the modal dialog

  Scenario: Verify Large model case
    Given I open the Modal Dialogs page
    When I click on the "Large modal" button
    Then I should see the large modal dialog
    And I close the modal dialog


