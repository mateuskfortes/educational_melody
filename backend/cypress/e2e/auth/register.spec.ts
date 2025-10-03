/// <reference types="cypress" />

describe('Registro - API', () => {
  function uniqueEmail() {
    return `test+${Date.now()}@example.com`;
  }

  it('Deve registrar um usuário com sucesso (200/201)', () => {
    const payload = {
      username: 'Teste Cypress',
      email: uniqueEmail(),
      password: 'SenhaForte123!'
    };

    // usar comando customizado que resolve baseUrl corretamente
    cy.registerApi(payload).then((res) => {
      expect(res.status).to.be.oneOf([200, 201]);
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('id');
      expect(res.body.user).to.have.property('email', payload.email);
    });
  });

  it('Deve retornar erro de validação quando faltar campos (400/422)', () => {
    const payload = {
      // name faltando
      email: uniqueEmail(),
      // password faltando
    };

    cy.registerApi(payload).then((res) => {
      // registerApi usa failOnStatusCode: false, então checamos status esperado de erro
      expect(res.status).to.be.oneOf([400, 422]);
      // opcional: validar formato do erro em res.body
    });
  });

  it('Deve impedir registro com email duplicado', () => {
    const email = uniqueEmail();
    const payload = { username: 'Dup Test', email, password: 'SenhaForte123!' };

    // primeiro registro deve passar
    cy.registerApi(payload).then((res) => {
      console.log('\n------------\n', res);
      expect(res.status).to.be.oneOf([200, 201]);
    });


    // segundo registro com mesmo email deve falhar (400/409/422)
    cy.registerApi(payload).then((res) => {
      expect(res.status).to.be.oneOf([400, 409, 422]);
    });
  });
});
