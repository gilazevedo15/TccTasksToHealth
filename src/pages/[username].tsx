import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

import { GetServerSideProps } from 'next';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdowContext';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeProvider } from '../contexts/ChallengesContext';
import { Sidebar } from '../components/Sidebar';
import React from 'react';

interface userGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { user } = props;
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title> {user.name} | Tasks to Health</title>
        </Head>

        <Sidebar />

        <div className={styles.content}>
          <div className={styles.containerXp}>
            <ExperienceBar />
          </div>
          

          <CountdownProvider>
            <section>
              <div>
                <Profile {...user} />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
