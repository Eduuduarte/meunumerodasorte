import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import Cover from '../../public/assets/clover.svg';

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Meu número da sorte</div>
        <div>
            <Image src={Cover} alt="cover" width={100} height={100}/>
        </div>
        <div className={styles.lastResultArea}>
            <p className={styles.titleResult}>último resultado</p>
            <p className={styles.subTitleResult}>Concurso - 2566 18/02/2023</p>
            <div className={styles.numberArea}>
                <div className={styles.numberRounded}>11</div>
                <div className={styles.numberRounded}>23</div>
                <div className={styles.numberRounded}>45</div>
                <div className={styles.numberRounded}>53</div>
                <div className={styles.numberRounded}>57</div>
                <div className={styles.numberRounded}>59</div>
            </div>
        </div>
    </div>
  )
}

export default index;
