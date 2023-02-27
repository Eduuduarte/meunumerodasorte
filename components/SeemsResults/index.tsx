import React from 'react'
import { useAppContext } from '../../context/app';
import styles from './styles.module.css';

import NumberSingle from '../NumberSingle';
import { formatterNumber } from '../../libs/formatter';

const Index = () => {
    const { seemsResults, allResults } = useAppContext();

    const formatter = formatterNumber()
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Resultados parecidos - {seemsResults?.length}/{allResults.length} Jogos</h4>
            {seemsResults?.map((value, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.titleCard}>
                        <div>Concurso {value.Sorteio} - {formatter.formatterData(value.Data.valueOf())}</div>
                        <span>{value.counts} - Acertos</span>
                    </div>
                    <div className={styles.areaNumber}>
                        {value.resultados.split(" ").map((value, index) => (
                            <NumberSingle
                                key={index}
                                numberSingle={value}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index