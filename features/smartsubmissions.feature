Feature: As a smartsubmission customer, I want to be able to navigate to smartsubmission page so that I can view product information

@smartsubmission @smartlogin
Scenario: Customer is displayed with smartsubmission login page
  Given I am on the "smartsubmission" website
  When I click on "LoginButton"
  And I enter "Email" as "nisharthini.nisha@gmail.com"
  And I enter "password" as "testpass123"
  And I click on "LoginActionButton"
  Then I should see "ErrorMessage"

  


   