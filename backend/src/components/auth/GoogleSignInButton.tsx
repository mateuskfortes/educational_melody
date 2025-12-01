import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function GoogleSigninButton() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    await signIn('google', { callbackUrl: '/' });
  }

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      className="login-with-google"
    >
      <div className="img">
        <Image
          src="/images/google-logo.svg"
          alt="Google Logo"
          fill
        />
      </div>
      {loading ? "Carregando..." : "Entrar com Google"}
    </button>
  )
}