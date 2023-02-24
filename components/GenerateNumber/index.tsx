import React, { useState } from 'react';
import styles from './styles.module.css';

import { dados } from '../../data/data';
import { genarateNumber } from '../../utils/generateNumber';
import { verifyNumber } from '../../utils/verifyNumber';

import Button from '../Button';

const GenerateNumber = () => {

  const [myNumber, setMyNumber] = useState<string>('');
  const [ready, setReady ] = useState<boolean>(false);

  const gerarNumeros = () => {
    setReady(false);
    const genarate = genarateNumber();
    const findGenarate = dados.filter(value => value.resultados == genarate);

    const verify = verifyNumber(genarate);
    setMyNumber(genarate);
   
    console.log(verify);

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
      <Button 
        title='Gerar Números'
        click={() => gerarNumeros()}
      />
    </div>
  )
}

export default GenerateNumber;