Feature: DAta Driven Testing without excel

Scenario: Data Driven Testing
    Given Add dd login page
    When I add username u1
    And I add userpassword u2
    And I clicked on the login button
    Then I should be presented with the following message validation succeded




    Scenario Outline: Data Driven Testing Login to Webdriver univery
    Given Data Driven Testing
    When I add username <username>
    I add userpassword <userpassword>

   Examples:
       | username | userpassword
       