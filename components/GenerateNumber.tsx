import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

import { genarateNumber } from '../utils/generateNumber';

const GenerateNumber = () => {

  const [myNumber, setMyNumber] = useState<string>('');


  const gerarNumeros = () => {
    const genarate = genarateNumber();

    setMyNumber(genarate);
  }

  return (
    <div className={styles.container}>
      <h1>{myNumber}</h1>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  )
}

export default GenerateNumber;
