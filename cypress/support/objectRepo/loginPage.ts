/// <reference types="cypress" />

export class loginPage{

  static userNameInput() {
    return cy.getByTestId('email');
  }
  static passwordInput(){
    return cy.getByTestId('password');
  }
  static loginButton(){
    return cy.getByTestId('login-button');
  }
}

