import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Cover from '../../public/assets/clover.svg';
import { useAppContext } from '../../context/app';
import { formatterNumber } from '../../libs/formatter';


const Index = () => {
  const {allResults} = useAppContext();

  const route = useRouter()

  const formatter = formatterNumber();

  const n = allResults?.length
  const lastResult = allResults[n-1].resultados.split(" ");

  console.log(allResults)

  const changePage = () => {
    route.push('/allresults')
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>Meu número da sorte</div>
        <div>
            <Image src={Cover} alt="cover" className={styles.image} width={100} height={100}/>
        </div>
        <div className={styles.lastResultArea}>
            <p className={styles.titleResult}>último resultado</p>
            <p className={styles.subTitleResult}>Concurso - {allResults[n-1].Sorteio} {formatter.formatterData(allResults[n-1].Data)}</p>
            <div className={styles.numberArea}>
                <div className={styles.numberRounded}>{lastResult[0]}</div>
                <div className={styles.numberRounded}>{lastResult[1]}</div>
                <div className={styles.numberRounded}>{lastResult[2]}</div>
                <div className={styles.numberRounded}>{lastResult[3]}</div>
                <div className={styles.numberRounded}>{lastResult[4]}</div>
                <div className={styles.numberRounded}>{lastResult[5]}</div>
            </div>
            <div className={styles.mostrarResultados} onClick={changePage}>Mostrar todos os resultados</div>
        </div>
    </div>
  )
}

export default Index;