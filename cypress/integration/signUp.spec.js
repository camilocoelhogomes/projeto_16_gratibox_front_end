/// <reference types="cypress" />

import userFactory from '../factory/userFactory';

describe('Login', () => {
  const newUser = userFactory();

  it('should login successfully', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('input[placeholder=Nome]').type(newUser.userName);
    cy.get('input[placeholder=E-mail]').type(newUser.userEmail);
    cy.get('input[placeholder=Senha]').type(newUser.userPassword);
    cy.get('[placeholder="Confirme a Senha"]').type(newUser.userPassword);
    cy.get('button[type=submit]').click();

    cy.url().should('equal', 'http://localhost:3000/sign-in');
  });
});
