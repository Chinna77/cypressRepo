import { getRandomText, getRandomNumber } from '../../../support/utility';
import {
  chooseENLanguage,
  loginIntoULM,
  logout,
} from '../../../support/CommonFunctions';
import {loginPage} from '../../../support/objectRepo/loginPage';
/*
Write all test cases related to Invitation user, Accept and onboard user and remove user
*/
describe('B2B User management suite', () => {
  beforeEach(()=>{
    
  })
  /*
    This test case is to invite a company admin user to ULM
    */
  it('Invite a company admin user to ULM', () => {
    cy.visit('http://telia.fi//tili');
    cy.loginIntoULM(Cypress.env('testUser'), Cypress.env('testUserPassword'));
  });
 
});
