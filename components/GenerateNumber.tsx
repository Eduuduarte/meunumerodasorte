import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

import { numeroDaSorte } from '../libs/randomNumber';

const GenerateNumber = () => {

  const random = numeroDaSorte();

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [thirdNumber, setThirdNumber] = useState<number>(0);
  const [fourthNumber, setFourthNumber] = useState<number>(0);
  const [fifthNumber, setFifthNumber] = useState<number>(0);
  const [sixthNumber, setSixthNumber] = useState<number>(0);

  const gerarNumeros = () => {
    let n1 = random.randomNumber();
    let n2;
    let n3;
    let n4;
    let n5;
    let n6;

    setFirstNumber(n1);

    do {
      n2 = random.randomNumber();
      n3 = random.randomNumber();
      n4 = random.randomNumber();
      n5 = random.randomNumber();
      n6 = random.randomNumber();
      
      setSecondNumber(n2);
      setThirdNumber(n3);
      setFourthNumber(n4);
      setFifthNumber(n5);
      setSixthNumber(n6);

    } while (
      n1 === n2 ||
      n1 === n3 || n2 === n3 ||
      n1 === n4 || n2 === n4 || n3 === n4 ||
      n1===n5 || n2===n5 || n3===n5 || n4===n5 ||
      n1===n6 || n2===n6 || n3===n6 || n4===n6 || n5===n6
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>{firstNumber}</p>
        <p>{secondNumber}</p>
        <p>{thirdNumber}</p>
        <p>{fourthNumber}</p>
        <p>{fifthNumber}</p>
        <p>{sixthNumber}</p>
      </main>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  )
}

export default GenerateNumber;
