import React from 'react';
import { useRouter } from 'next/router';
import { FiGithub, FiLogIn } from 'react-icons/fi';
import {useSession, signIn, signOut} from 'next-auth/client'
import styles from '../styles/pages/Login.module.css';
import Head from 'next/head';

export default function Profile() {
  const [session] = useSession();  

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
        
      </div>
    </div>
  );
}
