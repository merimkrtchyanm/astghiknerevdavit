Feature: Login Functionality
  As a user,
  I want to log in to my account
  So that I can access my dashboard

  Scenario: Successful Login
    Given I am on the login page
    When I enter my valid credentials
    # And click on the login button
    # Then I should be redirected to the dashboard page