'use client';

import GoogleSigninButton from '@/components/auth/GoogleSignInButton';
import '@/styles/auth-form.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState('');
  const [administratorCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      password: formData.get('password')?.toString(),
      is_administrator: formData.get('is_administrator') === 'on',
    };

    if (!data.username || !data.email || !data.password) {
      setErrorMsg('Todos os campos são obrigatórios.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error || 'Erro ao registrar.');
      } else {
        router.push('/login')
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="form-container">
        <h1>Cadastre-se</h1>
        <p className="subtitle">Crie uma Conta</p>

        {errorMsg && <div className="error">{errorMsg}</div>}

        <form className="form-component" onSubmit={handleSubmit}>
          <label htmlFor="username">Nome</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Digite seu nome"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu Email"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            required
          />

          {administratorCheckbox && (
            <label className="checkbox-label">
              <input
                id="is_administrator"
                name="is_administrator"
                type="checkbox"
              />
              O novo usuário é um administrador?
            </label>
          )}

          <div className="terms">
            <input type="checkbox" name="terms_of_service" required />
            Eu concordo com os <a href="#">Termos de Uso</a>
          </div>

          <input type="submit" value={loading ? 'Cadastrando...' : 'Cadastrar'} />
        </form>

        <div className="separator">OU</div>

        <GoogleSigninButton />

        <div className="separator">OU</div>

        <p className="bottom-text">
          Já possui uma conta? <a href="/login">Login</a>
        </p>
      </main>
    </>
  );
}
