import React, { useState, Component } from 'react';
import styles from './styles.module.css';
import NumberButton from '../NumberButton';


import { verifyNumber } from '../../utils/verifyNumber';
import NumberGenerate from '../NumberGenarate';
import Button from '../Button';

import { useAppContext } from '../../context/app';
import { arrayNumberKey } from '../../data/number';


const Index = () => {
  const { setSeemsResults, numberGenerate, setCountsChoices, setNumberGenerate } = useAppContext();

  const [statusBottom, setStatusBottom] = useState(false);

  const handleGerar = () => {
    const verify = verifyNumber(numberGenerate);
    setSeemsResults(verify.sort((game1 , game2) => game2.Sorteio - game1.Sorteio));
  }

  const handleClear = () => {
    setStatusBottom(!statusBottom);
    setCountsChoices(0)
    setNumberGenerate("00 00 00 00 00 00");
    setSeemsResults([]);
  }

  return (
    <div className={styles.container}>

      <div className={styles.numbers}>
        <NumberGenerate
        />
      </div>

      <div className={styles.areaKey}>
        {arrayNumberKey.map((value, index) => (
          <div key={value} className={styles.button}>
            <NumberButton
              number={value}
              status={statusBottom}
            />
          </div>
        ))}
      </div>

      <div className={styles.buttonMain}>
        <Button
          title='Gerar'
          click={() => handleGerar()}
          colorBack="#FB8500"
          colorFont='#F4FAFD'
        />
        <Button
          title='Limpar'
          click={() => handleClear()}
          colorBack="#8BA0AA"
          colorFont='#01141E'
        />
      </div>
    </div>
  )
}

export default Index;