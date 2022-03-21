import { getRandomText, getRandomNumber } from './utility';

export function loginIntoULM(userName, password): void {
  cy.getByTestId('email').should('be.visible');
  cy.getByTestId('email').type(userName);
  cy.getByTestId('password').type(password);
  cy.getByTestId('login-button').click();
}
export function chooseENLanguage(): void {
  cy.get('[class*="language-en-test"] > span').click();
}
export function logout(): void {
  cy.getByTestId('login-icon').click();
  cy.getByTestId('logged-in-logout-button').click();
}
