let resp_body
class CommonFunctions {
  static testCaseTitle() {
    return Cypress.mocha.getRunner().test.title;
  }
  static testCaseDuration() {
    return (Cypress.mocha.getRunner().suite.ctx.currentTest.duration/1000).toFixed(2)+' sec';
  }
  static testCaseErrorMessage() {
    return Cypress.mocha.getRunner().test.err.message;
  }
  static testCaseState() {
    return Cypress.mocha.getRunner().suite.ctx.currentTest.state;
  }
  static printMessage(msg) {
     // cy.log(msg)
    return 'message '+ msg +' printed';
  }
  static testrailCreateTestRun() {
      cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
      }).then((r) => {
          cy.task('setMyUniqueId', r.status)
          cy.task('setVal',baseUrl)
      });
  }

}

export default CommonFunctions;