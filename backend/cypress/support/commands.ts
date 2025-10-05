/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
  /**
   * API payload used for registration requests.
   * Fields are optional because different endpoints / tests may omit some.
   */
  interface RegisterApiPayload {
    username?: string;
    email?: string;
    password?: string;
    is_administrator?: boolean;
  }

  /**
   * Payload for credentials-based auth
   */
  interface LoginApiPayload {
    email: string;
    password: string;
  }

  /**
   * Payload for submitting the login form
   */
  interface SubmitLoginForm {
    email: string;
    password: string;
  }

  /**
   * Payload for submitting the registration form
   */
  interface SubmitRegisterForm {
    username?: string
    email?: string
    password?: string
    is_administrator?: boolean
  }

  /**
   * Reusable user payload for tasks that create a user record.
   * All fields are required for creating a user record in tests.
   */
  interface CreateUserPayload {
    username: string;
    email: string;
    password: string;
  }

  namespace Cypress {
    interface Chainable {
      /**
       * Send a registration request to the API.
       * Example: cy.registerApi({ username, email, password })
       */
      registerApi(payload: RegisterApiPayload): Cypress.Chainable<Cypress.Response<any>>;

      /**
       * Login via NextAuth credentials provider endpoint.
       * Example: cy.loginApi(email, password)
       */
      loginApi(payload: LoginApiPayload): Cypress.Chainable<any>;

      /**
       * Submit the registration form in the UI.
       * Example: cy.submitRegisterForm({ username, email, password })
       */
      submitRegisterForm(payload: SubmitRegisterForm): Cypress.Chainable<any>;

      /**
       * Submit the login form in the UI.
       * Example: cy.submitLoginForm({ email, password })
       */
      submitLoginForm(payload: SubmitLoginForm): Cypress.Chainable<any>;
    }
  }
}

Cypress.Commands.add('registerApi', (payload: RegisterApiPayload) => {
  const endpoint = '/api/register';

  return cy.request({
    method: 'POST',
    url: endpoint,
    body: payload,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('loginApi', (payload: LoginApiPayload) => {
  return cy.request('/api/auth/csrf').then((csrfRes) => {
    const csrfToken = csrfRes.body?.csrfToken;

    return cy.request({
      method: 'POST',
      url: '/api/auth/callback/credentials',
      form: true,
      body: {
        csrfToken,
        email: payload.email,
        password: payload.password
      },
    })
  });
});

Cypress.Commands.add('submitRegisterForm', (payload: SubmitRegisterForm) => {
  if (payload.username) cy.get('#username').clear().type(payload.username);
  if (payload.email) cy.get('#email').clear().type(payload.email);
  if (payload.password) cy.get('#password').clear().type(payload.password);
  cy.get('input[name="terms_of_service"]').check();
  if (payload.is_administrator) {
    cy.get('input[name="is_administrator"]').check();
  }
  return cy.get('form').submit();
})

Cypress.Commands.add('submitLoginForm', (payload: SubmitLoginForm) => {
  if (payload.email) cy.get('#email').clear().type(payload.email);
  if (payload.password) cy.get('#password').clear().type(payload.password);
  return cy.get('form').submit();
})

export { };