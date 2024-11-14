
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
    <div className="background-image"></div>
    <div className="login-content">
      <div className="logo-container">
        <Link href="/">
          <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="login-form-container">
        <h2 className="login-title">Welcome to YCE HUB</h2>
        <p className="login-subtitle">
          Want to Become Young CEO?{' '}
          <Link href="/register" className="signup-link">Become Now?</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" className="login-input" required />
          <input type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" className="login-input" required />
          <div className="login-actions">
            <Link href="/reset" className="forgot-password-link">Forget Password?</Link>
          </div>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <button type="submit" className="login-button">Get into your YCE HUB</button>
          <button type="button" className="google-login-button">
            <FaGoogle className="google-icon" />
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
