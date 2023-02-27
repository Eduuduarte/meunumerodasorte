import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import GenerateNumber from '../components/GenerateNumber';
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import ChoicesNumber from '../components/ChoicesNumber';
import SeemsResults from '../components/SeemsResults';

import { results } from '../types/dataType';
import { useAppContext } from '../context/app';

const Home: NextPage = () => {
  const [status, setStatus] = useState(true);
  const {setCountsChoices, setNumberGenerate, setSeemsResults} = useAppContext();
  const handleClick = () => {
    setStatus(!status);
    setCountsChoices(0)
    setNumberGenerate("00 00 00 00 00 00");
    setSeemsResults([]);
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
          title='Números Aleatórios'
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
      {!status && 
        <ChoicesNumber />
      }

      <SeemsResults />
    </div>
  )
}

export default Home;
