import React from "react";
import styles from '../styles/AllResults.module.css';
import { MdOutlineArrowBackIosNew} from 'react-icons/md';

import { useAppContext } from "../context/app";
import { formatterNumber } from "../libs/formatter";
import { useRouter } from "next/router";

const AllResults = () => {
    const { allResults } = useAppContext();
    const route = useRouter()

    const backHome = () => {
        route.push('/')
    }

    const formatter = formatterNumber();
    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHome}>
                <MdOutlineArrowBackIosNew width={80} height={80} />
            </div>
            <h1>Todos os Resultados</h1>
            <div>
                {allResults.sort((curso1, curso2) => curso2.Sorteio - curso1.Sorteio).map((value) => (
                    <div key={value.Sorteio} className={styles.areaResult}>
                        <p className={styles.subTitleResult}>Concurso - {value.Sorteio} - {formatter.formatterData(value.Data)}</p>
                        <div className={styles.numberArea}>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[0]}</div>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[1]}</div>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[2]}</div>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[3]}</div>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[4]}</div>
                            <div className={styles.numberRounded}>{value.resultados.split(" ")[5]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllResults;