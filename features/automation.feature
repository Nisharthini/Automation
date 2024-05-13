Feature: As a student, I want to be able to navigate to automation exercise page so that I can practice

  @autoex @autoreg
  Scenario Outline:Customer is displayed with automation exercise landing page
    Given I am on the "autoex" website
    When I see "homepage" website
    And I click on "LoginButton"
    And I see "NewUsersignup"
    And I enter "<Name>" with "<emailid>"
    And I click on "SignUp"
    And I see "Enteraccinfo"
    And I enter inputs to register
     | Inputname | Inputvalue |
     | password | nisha@1234 |
     | FirstName | nisha | 
     | LastName | agathya |
     | address | Nuture ave |
     | State | California | 
     | City | San Francisco |
     | ZipCode | 94530 |
     | Mobilephone | 1234567890 |   
    And I click on "CreateAccount"
    And I should see "accountcreatedmsg"
    And I click on "Continuebtn"
    And I should see "loggedinas"
    And I click on "deletebtn"
    And I should see "Accdeleted"
    Then I click on "Continue"
    Examples:
             | Name | emailid | 
             | Nisha | nisharthini.nisha@gmail.com |