import React, { useState } from 'react';
import styles from './styles.module.css';
import { formatterNumber } from '../../libs/formatter';
import { useAppContext } from '../../context/app';
import { valueFalse, valueTrue } from '../../utils/choicesNumbers';

type Props = {
  number: number
}

const index = ({ number }: Props) => {
  const [choice, setChoice] = useState(false);

  const { numberGenerate, setNumberGenerate, countsChoices, setCountsChoices } = useAppContext();

  const handlerColorButton = () => {
    if (countsChoices === 6) return;
    setChoice(!choice);

    if (!choice) {

      let numero = countsChoices + 1;
      setCountsChoices(numero);
      const newValue = valueTrue(number, numberGenerate);
      setNumberGenerate(newValue);
    } else {

      let numero = countsChoices - 1;
      setCountsChoices(numero);
      const newValue = valueFalse(number, numberGenerate);
      setNumberGenerate(newValue)
    
    }
  }

  const formatter = formatterNumber();

  return (
    <button
      className={styles.container}
      style={{
        backgroundColor: `${choice ? "#023047" : "#FCAD54"}`,
        border: `${choice ? "2px solid #E9F5F8" : 0}`,
        color: `${choice ? "#FFB703" : "#023047"}`,
      }}
      onClick={handlerColorButton}
    >
      {formatter.addZero(number)}
    </button>
  )
}

export default index;
