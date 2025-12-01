/// <reference types="cypress" />

describe('Register - API', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.clearAllCookies();
    cy.task('db:clean');
  });

  it('Should register a user successfully (200)', () => {
    const payload = {
      username: 'Cypress Test',
      email: uniqueEmail(),
      password: 'StrongPass123!'
    };

    // use custom command that resolves baseUrl correctly
    cy.registerApi(payload).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('id');
      expect(res.body.user).to.have.property('email', payload.email);
    });
  });

  it('Should return validation error when required fields are missing (400)', () => {
    const payload = {
      // username missing
      email: uniqueEmail(),
      // password missing
    };

    cy.registerApi(payload).then((res) => {
      // registerApi uses failOnStatusCode: false, so we check for expected error status
      expect(res.status).to.be.equal(400);
      // optional: validate error format in res.body
    });
  });

  it('Should prevent registration with duplicate email', () => {
    const email = uniqueEmail();
    const payload = { username: 'Dup Test', email, password: 'StrongPass123!' };

    // first registration should pass
    cy.registerApi(payload).then((res) => {
      expect(res.status).to.be.equal(200);
    });

    // second registration with the same email should fail (400)
    cy.registerApi(payload).then((res) => {
      expect(res.status).to.be.equal(400);
    });
  });
});
