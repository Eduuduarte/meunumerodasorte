import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import GenerateNumber from '../components/GenerateNumber';
import Header from '../components/Header';
import Switch from '../components/Switch';
import { useState } from 'react';

const Home: NextPage = () => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
    console.log(status);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Switch
        click={handleClick}
        status={status}
      />
  
      <GenerateNumber />
    </div>
  )
}

export default Home;