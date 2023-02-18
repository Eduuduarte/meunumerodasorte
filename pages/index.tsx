import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import { numeroDaSorte } from '../libs/randomNumber';
import { dados } from '../data/data';

const Home: NextPage = () => {

  const random = numeroDaSorte();

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [thirdNumber, setThirdNumber] = useState<number>(0);
  const [fourthNumber, setFourthNumber] = useState<number>(0);
  const [fifthNumber, setFifthNumber] = useState<number>(0);
  const [sixthNumber, setSixthNumber] = useState<number>(0);

  const gerarNumeros = () => {
    let n1 = random.randomNumber();
    let n2;
    let n3;
    let n4;
    let n5;
    let n6;

    setFirstNumber(n1);

    do {
      n2 = random.randomNumber();
      n3 = random.randomNumber();
      n4 = random.randomNumber();
      n5 = random.randomNumber();
      n6 = random.randomNumber();
      
      setSecondNumber(n2);
      setThirdNumber(n3);
      setFourthNumber(n4);
      setFifthNumber(n5);
      setSixthNumber(n6);
    } while (
      n1 === n2 &&
       n1===n3 || n2 === n3 &&
      n1===n4 || n2===n4 || n3===n4 &&
      n1===n5 || n2===n5 || n3===n5 || n4===n5 &&
      n1===n6 || n2===n6 || n3===n6 || n4===n6 || n5===n6
    );

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Meu Número da Sorte</h1>
      </header>

      <main className={styles.main}>
        <input type="text" onChange={() => { }} value={firstNumber} />
        <input type="text" value={secondNumber} onChange={() => { }} />
        <input type="text" value={thirdNumber} onChange={() => { }} />
        <input type="text" value={fourthNumber} onChange={() => { }} />
        <input type="text" value={fifthNumber} onChange={() => { }} />
        <input type="text" value={sixthNumber} onChange={() => { }} />
      </main>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  )
}

export default Home;
