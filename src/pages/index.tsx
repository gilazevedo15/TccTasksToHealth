import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FiGithub, FiLogIn } from 'react-icons/fi';
import {useSession, signIn, signOut} from 'next-auth/client'
import styles from '../styles/pages/Login.module.css';
import Head from 'next/head';

export default function Profile() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const { push } = useRouter();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }  

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Tasks to Health</title>
      </Head>
      <div className={styles.content}>
      <img src="logo/logoatt.png" alt="Logo" />
        <strong>Olá, Bem-vindo(a)</strong>

        <div className={styles.title}>
        <FiGithub size={36} />
          <span>Faça login com seu GitHub para iniciar.</span>
        </div>

        <a>
        <button type="button" onClick={() => signIn('github')}>
          Conectar com Github
          <img src="/icons/githublogo.svg" alt="githublogo" />
        </button>
        </a>
        <br/>
        <h3>
          Ou busque pelo seu username do gitHub:
        </h3>
        <br/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          <button type="submit">
            <FiLogIn size={24} />
          </button>
        </form>  
      </div>
    </div>
  );
}
