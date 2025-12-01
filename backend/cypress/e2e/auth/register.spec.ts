/// <reference types="cypress" />

describe('Register - UI', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.clearAllCookies();
    cy.task('db:clean');
  });

  it('registers a user successfully and redirects to /login', () => {
    const password = 'StrongPass123!';
    const payload = {
      username: 'UI Register Test',
      email: uniqueEmail(),
      password
    };

    cy.visit('/register');

    cy.submitRegisterForm(payload);

    // after successful registration the form pushes to /login
    cy.location('pathname').should('eq', '/login');

    // no error should be visible
    cy.get('.error').should('not.exist');
  });
});
