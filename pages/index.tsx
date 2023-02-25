import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import GenerateNumber from '../components/GenerateNumber';
import Header from '../components/Header';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
  
      <GenerateNumber />
    </div>
  )
}

export default Home;