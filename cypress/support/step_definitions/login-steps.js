import {Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
      let stub;
      Before(() => {
         cy.log(('Executing before step'));
         stub = cy.stub();
      })

Given('access the webdrive university login portal page', () => {
      cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
 })
       
 When("I entered the user id {word}", (userName) =>{
    cy.get("#text").type(userName);
 })

 Then('I should be presented with the following message validation succeded {word} {word}'),(message,message2) => {
   const expectedMessage = message + " " + message2;
   cy.log(expectedMessage);
   cy.log(stub.getCall(0)).to.be.calledWith(expectedMessage)
 
 }