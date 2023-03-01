import React, { useState } from 'react';
import styles from './styles.module.css';

import { dados } from '../../data/data';
import { genarateNumber } from '../../utils/generateNumber';
import { verifyNumber } from '../../utils/verifyNumber';

import Button from '../Button';
import NumberGenarate from '../NumberGenarate';
import { useAppContext } from '../../context/app';

const GenerateNumber = () => {
  const [ready, setReady ] = useState<boolean>(false);

  const { setNumberGenerate, setSeemsResults} = useAppContext()

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
  }
  
  return (
    <div className={styles.container}>
      <NumberGenarate />
      {ready && 
        <h5 className={styles.msg}>Número já sorteado em outro concurso.</h5>
      }
      <Button 
        title='Gerar Números'
        click={() => gerarNumeros()}
        colorBack="#FB8500"
        colorFont='#F4FAFD'
      />
    </div>
  )
}

export default GenerateNumber;