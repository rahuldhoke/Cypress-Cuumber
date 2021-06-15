import {Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
Given('DD login webpage', () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})

Given('Data Driven Testing', () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})

When("I add username {word}",(username) =>{
    cy.get ('abc').type(username)
})

And("I add userpassword {word}",(username) =>{
    cy.get ('abc').type(username)
})