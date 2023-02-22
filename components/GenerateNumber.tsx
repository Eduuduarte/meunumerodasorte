import React, { use, useState } from 'react';
import styles from '../styles/Home.module.css';

import { dados } from '../data/data';
import { genarateNumber } from '../utils/generateNumber';

const GenerateNumber = () => {

  const [myNumber, setMyNumber] = useState<string>('');
  const [ready, setReady ] = useState<boolean>(false);

  const gerarNumeros = () => {
    setReady(false);
    const genarate = genarateNumber();
    const findGenarate = dados.filter(value => value.resultados == genarate);
    console.log(genarate)
    console.log(findGenarate.length);

    setMyNumber(genarate);

    if(findGenarate.length >= 1) {
      setReady(true);
    }
  }
  
  return (
    <div className={styles.container}>
      <h1>{myNumber}</h1>
      {ready && 
        <h5>Número já sorteado em outro concurso.</h5>
      }
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  )
}

export default GenerateNumber;
