import React, { useState } from 'react';
import styles from './styles.module.css';
import { formatterNumber } from '../../libs/formatter';

type Props = {
  number: number
}

const index = ({ number }: Props) => {
  const [choice, setChoice] = useState(false)

  const handlerColorButton = () => {
    setChoice(!choice)
    console.log('Choice', choice)
  }

  const formatter = formatterNumber();

  return (
    <button
      className={styles.container}
      style={{
        backgroundColor: `${choice ? "#023047" : "#FCAD54"}`,
        border: `${choice ? "1px solid" : 0}`,
        color: `${choice ? "#FFB703" : "#023047"}`,
      }}
      onClick={handlerColorButton}
    >
      {formatter.addZero(number)}
    </button>
  )
}

export default index;
