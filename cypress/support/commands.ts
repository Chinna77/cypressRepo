import {loginPage} from '../support/objectRepo/loginPage';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress{
  interface Chainable{
    /**
    * Custom command to select DOM element by data-cy attribute.
    * @example cy.dataCy('greeting')
    */
    getByTestId(value: string): Chainable<JQuery<HTMLElement>>;
    /**
    * Custom command to login to ULM with userName and Password.
    * @param - userName : string - accepts ULM username
    * @param - password : string - accepts ULM password
    */
    loginIntoULM(userName:string, password: string) : Chainable<JQuery<HTMLElement>>;
  }
}
}


Cypress.Commands.add('getByTestId', (selector) => {
  return cy.get(`[data-testid=${selector}]`);
});

Cypress.Commands.add('loginIntoULM', (userName, password)=>{
  loginPage.userNameInput().should('be.visible');
  loginPage.userNameInput().type(userName);
  loginPage.passwordInput().type(password);
  loginPage.loginButton().click();
})
