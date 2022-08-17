import { Given, When, Then, And,After,Before } from 'cypress-cucumber-preprocessor/steps';
import CommonFunctions from './common-functions.js';

before(()=>{
    CommonFunctions.testrailCreateTestRun()
    cy.task('getMyUniqueId').then((myUniqueId) => {
            cy.log(myUniqueId)
    })
    cy.task('getVal').then((myval) => {
            cy.log(myval)
    })
})

afterEach(() => {
       cy.log('After each scenario message')
       cy.log("Scenario:" + CommonFunctions.testCaseTitle())
       cy.log("Status:" + CommonFunctions.testCaseState())
       if (CommonFunctions.testCaseState() === 'failed') {
            cy.log("Error:" + CommonFunctions.testCaseErrorMessage());
        }
        cy.log(CommonFunctions.testCaseDuration())
    });

after(() => { 
  cy.log(CommonFunctions.printMessage('my message'))
})