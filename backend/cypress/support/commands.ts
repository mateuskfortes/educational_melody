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
//
// Troubleshooting rápido: se suas requisições falharem, verifique:
// - Você tem conectividade de rede / internet?
// - O servidor backend está em execução e acessível?
// - O CYPRESS_BASE_URL (ou Cypress.config('baseUrl')) está apontando para o backend correto?
// - Há regras de firewall, VPN ou proxy bloqueando a conexão?
// - Se estiver usando uma URL absoluta, defina a variável de ambiente CYPRESS_API_BASE_URL ou Cypress.env('API_BASE_URL').
//
// Exemplo para rodar com base url customizada:
//   CYPRESS_BASE_URL=http://localhost:4000 npx cypress open
// ou
//   npx cypress open --env API_BASE_URL=http://localhost:4000
//
// eslint: desabilita a regra apenas para permitir a declaração global necessária para tipar Cypress
// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Faz uma requisição de registro via API.
       * Exemplo: cy.registerApi({ username, email, password })
       */
      registerApi(payload: { username?: string; email?: string; password?: string; is_administrator?: boolean }): Cypress.Chainable<Cypress.Response<any>>;
    }
  }
}
//
// Comandos customizados para os testes de backend.
// Exemplo de uso: cy.registerApi({ username, email, password })

// Prioriza SITE_URL para não precisar manter múltiplas variáveis.
// Certifique-se de que cypress.config.ts carregue o .env ou passe SITE_URL via env ao iniciar o Cypress.
Cypress.Commands.add('registerApi', (payload: { username?: string; email?: string; password?: string; is_administrator?: boolean }) => {
  // Ordem de prioridade:
  // 1) SITE_URL (recomendado)S
  const site = Cypress.env('SITE_URL') as string | undefined;
  const base = site || '';

  // Novo: permite sobrescrever apenas o endpoint de registro pela env REGISTER_ENDPOINT.
  // Por padrão usamos '/api/register' (rota típica de Next.js/Backend para criar usuário),
  // evitando conflitos com o endpoint do NextAuth (que costuma ser /api/auth/...).
  const endpointEnv = Cypress.env('REGISTER_ENDPOINT') as string | undefined;
  const endpoint = endpointEnv || '/api/register';

  const url = base ? `${base.replace(/\/$/, '')}${endpoint.startsWith('/') ? '' : '/'}${endpoint}` : endpoint;

  return cy.request({
    method: 'POST',
    url, // usa URL absoluta se base fornecida, caso contrário rota relativa
    body: payload,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  });
});

export { }; // garante que o arquivo seja tratado como módulo para a declaração de tipos