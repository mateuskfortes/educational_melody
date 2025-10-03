/// <reference types="cypress" />

describe('Login - API', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  // Clean DB before each test
  beforeEach(() => {
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
    cy.task('db:createUser', payload).then((user) => {
      expect(user).to.have.property('email', payload.email);

      // Get CSRF token required by NextAuth
      cy.request('/api/auth/csrf').then((csrfRes) => {
        const csrfToken = csrfRes.body?.csrfToken;
        expect(csrfToken).to.be.a('string');

        // Post credentials to NextAuth callback endpoint (form encoded)
        cy.request({
          method: 'POST',
          url: '/api/auth/callback/credentials',
          form: true,
          body: {
            csrfToken,
            email: payload.email,
            password
          },
        }).then((loginRes) => {
          // Capture cookies from headers.
          expect(loginRes.status).to.be.equal(200);

          cy.getCookie('next-auth.session-token').should('exist');
        });
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

    cy.task('db:createUser', payload).then((user) => {
      expect(user).to.have.property('email', payload.email);


      // Get CSRF token required by NextAuth
      cy.request('/api/auth/csrf').then((csrfRes) => {
        const csrfToken = csrfRes.body?.csrfToken;
        expect(csrfToken).to.be.a('string');

        // Attempt login with wrong password
        cy.request({
          method: 'POST',
          url: '/api/auth/callback/credentials',
          form: true,
          body: {
            csrfToken,
            email: payload.email,
            password: payload.password + 'x'
          },
        }).then((loginRes) => {

          // On failure NextAuth often redirects to an error URL (302).
          expect(loginRes.status).to.be.equal(200);

          cy.getCookie('next-auth.session-token').should('not.exist');
        });
      });
    });
  });
});
