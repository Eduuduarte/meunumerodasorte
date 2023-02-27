import React from 'react';
import { useAppContext } from '../../context/app';
import styles from './styles.module.css';

type Props = {
    numberSingle: string
}

const Index = ({ numberSingle }: Props) => {
  const { numberGenerate } = useAppContext();

  const verify = numberGenerate.split(" ").filter(value => value == numberSingle);

  return (
    <div className={styles.container} style={{
      backgroundColor: `${verify.length >= 1 ? "#219EBC" : ""}`,
      border: `${verify.length >= 1 ? 0 : "1px solid"}`,
      color: `${verify.length >= 1 ? "#FFF3E3" : "#023047"}`,
    }}>
      {numberSingle}
    </div>
  )
}

export default Index;