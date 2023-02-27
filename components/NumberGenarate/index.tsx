import React from 'react';
import { useAppContext } from '../../context/app';
import styles from './styles.module.css';

const index = () => {
  const {numberGenerate} = useAppContext()

  const partNumber = numberGenerate?.split(" ");
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
    </div>
  )
}

export default index;
