import React from 'react'
import { useAppContext } from '../../context/app';
import styles from './styles.module.css';

import NumberSingle from '../NumberSingle';

const index = () => {
    const { seemsResults } = useAppContext();
    return (
        <div className={styles.container}>
            <h4>Resultados parecidos - {seemsResults?.length}</h4>
            {seemsResults?.map((value, index) => (
                <div className={styles.card} key={index}>
                    <div>
                        <div>Concurso {value.Sorteio} - {value.Data}</div>
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

export default index
