'use client';

import '@/styles/auth-form.css';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError('E-mail ou senha incorretos');
    } else {
      router.push('/');
    }
  }

  return (
    <>
      <main className="form-container">
        <h1>Login</h1>
        <p className="subtitle">Realize o Login para acessar a sua conta!</p>

        {error && <p className="error">{error}</p>}

        <form className="form-component" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="submit"
            value={loading ? 'Entrando...' : 'Entrar'}
          />
        </form>

        <div className="separator">OU</div>

        <p className="bottom-text">
          Ainda não possui uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </main>
    </>
  );
}
