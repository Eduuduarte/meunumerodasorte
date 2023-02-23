import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

import { dados } from '../data/data';
import { genarateNumber } from '../utils/generateNumber';
import { results } from '../types/dataType';
import { verifyNumber } from '../utils/verifyNumber';

const GenerateNumber = () => {

  const [myNumber, setMyNumber] = useState<string>('');
  const [ready, setReady ] = useState<boolean>(false);

  const gerarNumeros = () => {
    setReady(false);
    const genarate = genarateNumber();
    const findGenarate = dados.filter(value => value.resultados == genarate);

    const verify = verifyNumber(genarate);
    setMyNumber(genarate);
    // const newGenarate = genarate.split(" ");
    // let a1 = newGenarate[0];
    // let a2 = newGenarate[1];
    // let a3 = newGenarate[2];
    // let a4 = newGenarate[3];
    // let a5 = newGenarate[4];
    // let a6 = newGenarate[5];
    // // console.log(newGenarate);

    // let test;
    // let moreArray: results[] = []; 
    // const testandoArray = dados.map(valeu => {
    //   test = valeu.resultados.split(" ");
    //   let n = 0;
    //   for(let i in test){
    //     a1 == test[i] ? n++ : ""
    //     a2 == test[i] ? n++ : ""
    //     a3 == test[i] ? n++ : ""
    //     a4 == test[i] ? n++ : ""
    //     a5 == test[i] ? n++ : ""
    //     a6 == test[i] ? n++ : ""
    //   }
    //   if(n>3){
    //     moreArray.push(valeu)
    //   }
    // });

    // console.log("number", genarate)
    console.log(verify);

    if(findGenarate.length >= 1) {
      setReady(true);
    }
  }
  
  return (
    <div className={styles.container}>
      <h1>{myNumber}</h1>
      {ready && 
        <h5>Número já sorteado em outro concurso.</h5>
      }
      <button onClick={gerarNumeros}>Gerar Números</button>
    </div>
  )
}

export default GenerateNumber;
