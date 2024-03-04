Feature: As a parabank customer, I want to be able to navigate to parabank page so that I can access my account

  @parabank @parabanklogin
  Scenario Outline:Customer is displayed with parabank landing page
    Given I am on the "parabank" website
    When I enter "<Username>" with "<Password>"
    Then I click "LoginButton"
    Examples:
             | Username | Password | 
             | nisha123 | nisha@1234 |
       

  @parabank @parabankregister
  Scenario:Customer is displayed with parabank landing page
    Given I am on the "parabank" website
    When I click on "Register"
    And I enter inputs to register
     | Inputname | Inputvalue |
     | FirstName | nisha | 
     | LastName | agathya |
     | Address | 123 Ave | 
     | City | San Francisco |
     | State | California | 
     | ZipCode | 94530 |
     | Phone | 1234567890 | 
     | username | nisha |
     | password | nisha@1234 |
     | Confirm | nisha@1234 |
    Then I click "RegisterButton"

  @parabank @parabankforgetinfo
  Scenario:Customer is displayed with parabank landing page
    Given I am on the "parabank" website
    When I click on "Forgetinfo"
    And I enter inputs for forgetinfo
     | Inputname | Inputvalue |
     | Fn | nisha | 
     | Ln | agathya |
     | RegAddress | 123 Ave | 
     | RegCity | San Francisco |
     | RegState | California | 
     | RegZipCode | 94530 |
    Then I click "findmyinfo"