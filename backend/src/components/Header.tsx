'use client';

import Link from 'next/link';
import '@/styles/header.css';
import { signOut, useSession } from 'next-auth/react';

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="header">
        <Link href="/" className="logo">Melodia Educacional</Link>

        <nav className="nav">
          <ul>
            <li>
              {!session && (
                <Link href="/register" className="nav-link active">Cadastro</Link>
              )}
            </li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Quem somos</a></li>
            <li>
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="login-button"
                >Sair</button>
              ) : (
                <Link href="/login" className="login-button">Login</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
