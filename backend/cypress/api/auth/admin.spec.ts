/// <reference types="cypress" />

describe('Admin creation rules - API', () => {
  function uniqueEmail() {
    const random = Math.random().toString(36).substring(2, 10);
    return `test+${random}@example.com`;
  }

  beforeEach(() => {
    cy.clearAllCookies();
    cy.task('db:clean');
  });

  it('admin user can create another admin', () => {
    const admin = {
      username: 'Super Admin',
      email: uniqueEmail(),
      password: 'StrongPass123!',
      isAdministrator: true
    };

    const newAdmin = {
      username: 'Created Admin',
      email: uniqueEmail(),
      password: 'StrongPass123!',
      isAdministrator: true
    };

    // cria admin direto no DB e autentica
    cy.task('db:createUser', admin).then(() => {
      cy.loginApi({ email: admin.email, password: admin.password }).then((req) => {
        console.log('oi', req)
        cy.registerApi(newAdmin).then((res) => {
          console.log('Admin created:', res.body);
          expect(res.status).to.equal(200);
        });
      });
    });
  });

  it('non-admin user cannot create an admin', () => {
    const user = {
      username: 'Normal User',
      email: uniqueEmail(),
      password: 'StrongPass123!'
    };

    const attemptedAdmin = {
      username: 'Bad Admin',
      email: uniqueEmail(),
      password: 'StrongPass123!',
      isAdministrator: true
    };

    cy.task('db:createUser', user).then(() => {
      cy.loginApi({ email: user.email, password: user.password }).then(() => {
        cy.registerApi(attemptedAdmin).then((res) => {
          expect(res.status).to.be.equal(403);
        });
      });
    });
  });
});
