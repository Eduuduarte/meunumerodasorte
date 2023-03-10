import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css';

import GenerateNumber from '../components/GenerateNumber';
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import ChoicesNumber from '../components/ChoicesNumber';
import SeemsResults from '../components/SeemsResults';

import { useAppContext } from '../context/app';

const Home: NextPage = () => {
  const [status, setStatus] = useState(true);
  const { setCountsChoices, setNumberGenerate, setSeemsResults, seemsResults } = useAppContext();

  const handleClick = () => {
    setStatus(!status);
    setCountsChoices(0)
    setNumberGenerate("00 00 00 00 00 00");
    setSeemsResults([]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href="/assets/clover.svg" />
        <title>Meu Número da Sorte</title>

        <meta name="description" content="Gerador dos números da mega sena Gerar números da mega sena" />
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
        <ChoicesNumber
        />
      }
      {seemsResults &&
        <SeemsResults />
      }

    </div>
  )
}

export default Home;
