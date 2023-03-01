import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { formatterNumber } from '../../libs/formatter';
import { useAppContext } from '../../context/app';
import { valueFalse, valueTrue } from '../../utils/choicesNumbers';
import { verifyNumber } from '../../utils/verifyNumber';

type Props = {
  number: number
  status: boolean;
}

const Index = ({ number, status }: Props) => {
  const [choice, setChoice] = useState(false);

  const { numberGenerate, setNumberGenerate, countsChoices, setCountsChoices, setSeemsResults } = useAppContext();

  useEffect(() => {
    setChoice(false)
  }, [status])
  
  const handlerColorButton = () => {
    if(choice){
      let numero = countsChoices - 1;
      setCountsChoices(numero);
      const newValue = valueFalse(number, numberGenerate);
      setNumberGenerate(newValue)
      setChoice(!choice)
      const verify = verifyNumber(numberGenerate);
      setSeemsResults(verify)
    }
    if (countsChoices === 6) return;
    setChoice(!choice);

    if (!choice) {
      let numero = countsChoices + 1;
      setCountsChoices(numero);
      const newValue = valueTrue(number, numberGenerate);
      setNumberGenerate(newValue);
      const verify = verifyNumber(numberGenerate);
      setSeemsResults(verify)
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

export default Index;