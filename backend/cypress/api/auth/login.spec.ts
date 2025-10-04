/// <reference types="cypress" />

describe('Login - API', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.clearAllCookies();
    cy.task('db:clean');
  });

  it('Should login successfully and set NextAuth session cookie', () => {
    const password = 'StrongPass123!';
    const payload = {
      username: 'Login Test',
      email: uniqueEmail(),
      password
    };

    // create user + account directly via task (ensures account record exists)
    cy.task('db:createUser', payload).then(() => {
      cy.loginApi(payload).then(() => {
        cy.getCookie('next-auth.session-token').should('exist');
      });
    });
  });

  it('Should not set NextAuth session cookie with invalid credentials', () => {
    const password = 'StrongPass123!';
    const payload = {
      username: 'Login Test Fail',
      email: uniqueEmail(),
      password
    };

    cy.task('db:createUser', payload).then(() => {
      cy.loginApi({ ...payload, password: 'wrong' }).then(() => {
        cy.getCookie('next-auth.session-token').should('not.exist');
      });
    });
  });
});
