'use client';

import Header from '@/components/Header';
import '@/styles/form.css';
import { useState } from 'react';

export default function RegisterPage() {
  const [errorMsg, setErrorMsg] = useState('');
  const [administratorCheckbox, setAdministratorCheckbox] = useState(true); 

  return (
    <>
      <Header />
      <main className="form-container">
        <h1>Cadastre-se</h1>
        <p className="subtitle">Crie uma Conta</p>

        {errorMsg && <div className="error">{errorMsg}</div>}

        <form className="form-component" action="/api/register" method="POST">
          <label htmlFor="username">Nome</label>
          <input id="username" name="username" type="text" placeholder="Digite seu nome" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Digite seu Email" required />

          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" placeholder="Digite sua Senha" required />

          {administratorCheckbox && (
            <label className="checkbox-label">
              <input id="is_administrator" name="is_administrator" type="checkbox" />
              O novo usuário é um administrador?
            </label>
          )}

          <div className="terms">
            <input type="checkbox" name="terms_of_service" required />
            Eu concordo com os <a href="#">Termos de Uso</a>
          </div>

          <input type="submit" value="Sign Up" />
        </form>

        <div className="separator">OU</div>

        <p className="bottom-text">
          Já possui uma conta? <a href="/login">Login</a>
        </p>
      </main>
    </>
  );
}
