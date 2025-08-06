'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setError(params.get('error'));
    setSuccess(params.get('success'));
  }, [params]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <div className={styles.container} data-testid="login-container">
      <h1 className={styles.title} data-testid="login-heading">
        {success ? success : 'Welcome Back'}
      </h1>
      <h2 className={styles.subtitle} data-testid="login-subtitle">
        Please sign in to see the dashboard.
      </h2>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        data-testid="login-form"
      >
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
          data-testid="login-email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          data-testid="login-password"
        />
        <button className={styles.button} data-testid="login-submit">
          Login
        </button>
        {error && <span data-testid="login-error">{error}</span>}
      </form>

      <button
        onClick={() => {
          signIn('google');
        }}
        className={styles.button + ' ' + styles.google}
        data-testid="login-google"
      >
        Login with Google
      </button>

      <span className={styles.or} data-testid="login-or">
        - OR -
      </span>

      <Link
        className={styles.link}
        href="/dashboard/register"
        data-testid="login-register-link"
      >
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
