import React, { useState } from 'react';
import styles from './styles.module.css';

import { dados } from '../../data/data';
import { genarateNumber } from '../../utils/generateNumber';
import { verifyNumber } from '../../utils/verifyNumber';

import Button from '../Button';
import { useAppContext } from '../../context/app';

const GenerateNumber = () => {
  const [ready, setReady ] = useState<boolean>(false);

  const {numberGenerate, setNumberGenerate, seemsResults,setSeemsResults} = useAppContext()

  const partNumber = numberGenerate?.split(" ");

  const gerarNumeros = () => {
    setReady(false);
    const genarate = genarateNumber();
    const findGenarate = dados.filter(value => value.resultados == genarate);

    const verify = verifyNumber(genarate);
    setSeemsResults(verify);
    setNumberGenerate(genarate);
   
    

    if(findGenarate.length >= 1) {
      setReady(true);
    }
    console.log(numberGenerate);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.numberArea}>
        <div className={styles.sigleNumber}>{partNumber[0]}</div>
        <div className={styles.sigleNumber}>{partNumber[1]}</div>
        <div className={styles.sigleNumber}>{partNumber[2]}</div>
        <div className={styles.sigleNumber}>{partNumber[3]}</div>
        <div className={styles.sigleNumber}>{partNumber[4]}</div>
        <div className={styles.sigleNumber}>{partNumber[5]}</div>
      </div>
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