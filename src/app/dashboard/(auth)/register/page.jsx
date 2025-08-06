'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container} data-testid="register-container">
      <h1 className={styles.title} data-testid="register-heading">
        Create an Account
      </h1>
      <h2 className={styles.subtitle} data-testid="register-subtitle">
        Please sign up to see the dashboard.
      </h2>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        data-testid="register-form"
      >
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
          data-testid="register-username"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
          data-testid="register-email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          data-testid="register-password"
        />
        <button className={styles.button} data-testid="register-submit">
          Register
        </button>
        {error && (
          <span data-testid="register-error">Something went wrong!</span>
        )}
      </form>

      <span className={styles.or} data-testid="register-or">
        - OR -
      </span>

      <Link
        className={styles.link}
        href="/dashboard/login"
        data-testid="register-login-link"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
