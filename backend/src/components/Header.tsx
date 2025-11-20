'use client';

import Link from 'next/link';
import '@/styles/header.css';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Header() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.error) {
      signOut({ callbackUrl: '/login' });
    }
  }, [session]);

  return (
    <header className="header">
      <Link href="/" className="logo">Melodia Educacional</Link>
      <nav className="nav">
        <ul>
          <li>
            {status !== 'loading' && !session && (
              <Link href="/register" className="nav-link active">Cadastro</Link>
            )}
          </li>
          <li><a href="#">Tutorial</a></li>
          <li><a href="#">Quem somos</a></li>
          <li>
            {status === 'loading' ? null : session ? (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="login-button"
              >
                Sair
              </button>
            ) : (
              <Link href="/login" className="login-button">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
