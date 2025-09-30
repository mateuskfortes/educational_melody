'use client';

import Link from 'next/link';
import '@/styles/header.css';
import { useSession } from 'next-auth/react';

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <link rel="stylesheet" href="/css/header.css" />
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
                <form action="/logout" method="POST">
                  <button type="submit" className="login-button">Logout</button>
                </form>
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
