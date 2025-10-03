/// <reference types="cypress" />

describe('Login - UI', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.task('db:clean');
  });

  it('logs in with valid credentials and redirects to /', () => {
    const password = 'StrongPass123!';
    const payload = {
      username: 'UI Login Test',
      email: uniqueEmail(),
      password
    };

    cy.createUserAndVisitLogin(payload);

    cy.fillEmail(payload.email);
    cy.fillPassword(password);
    cy.submitLogin();

    // verify it redirected to the home page (adjust if your baseUrl/destination differs)
    cy.location('pathname').should('eq', '/');
    cy.getCookie('next-auth.session-token').should('exist');
  });

  it('shows an error with invalid credentials', () => {
    const password = 'StrongPass123!';
    const payload = {
      username: 'UI Login Fail',
      email: uniqueEmail(),
      password
    };

    cy.task('db:createUser', payload).then(() => {
      cy.visit('/login');

      cy.fillEmail(payload.email);
      cy.fillPassword(password + 'x'); // wrong password
      cy.submitLogin();

      // the page displays the message defined in page.tsx
      // accept either the existing Portuguese text or an English translation
      cy.get('.error').invoke('text').then((txt) => {
        expect(txt).to.match(/E-mail ou senha incorretos|Incorrect email or password/);
      });
    });
  });
});