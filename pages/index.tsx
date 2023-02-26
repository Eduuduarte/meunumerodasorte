import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import GenerateNumber from '../components/GenerateNumber';
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import ChoicesNumber from '../components/ChoicesNumber'
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

      <div className={styles.toggleButtonArea}>
        <ToggleButton 
          title='Gerar Números'
          click={handleClick}
          status={status}
        />
        <ToggleButton 
          title='Escolher Números'
          click={handleClick}
          status={!status}
        />
      </div>
  
      {status && 
            <GenerateNumber />
      }
    </div>
  )
}

export default Home;