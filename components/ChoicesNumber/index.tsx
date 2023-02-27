import React from 'react';
import styles from './styles.module.css';
import NumberButton from '../NumberButton';
import { arrayNumberKey } from '../../data/number';

import NumberGenerate from '../NumberGenarate';
import Button from '../Button';

import { useAppContext } from '../../context/app';
import { verifyNumber } from '../../utils/verifyNumber';

const index = () => {
  const { setSeemsResults, numberGenerate } = useAppContext();

  const handleGerar = () => {
    const verify = verifyNumber(numberGenerate);
    setSeemsResults(verify);
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
              number={value} />
          </div>
        ))}
      </div>
      <Button 
        title='Gerar'
        click={() => handleGerar()}
      />
    </div>
  )
}

export default index;
