import React from 'react';
import styles from './styles.module.css';
import NumberButton from '../NumberButton';
import { arrayNumberKey } from '../../data/number';

const index = () => {

  return (
    <div className={styles.container}>
        {arrayNumberKey.map((value, index) => (
            <NumberButton
            key={value}
            number={value}
            />
        ))}
    </div>
  )
}

export default index;
