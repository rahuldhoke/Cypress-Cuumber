Feature: Webdriver University Login Page

Scenario: Login using valid credential
    Given access the webdrive university login portal page
    When I entered the user id abc
    And I entered the password xxx
    And I clicked on the login button
    Then I should be presented with the following message validation succeded


    