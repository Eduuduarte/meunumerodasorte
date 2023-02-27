import React from 'react';
import styles from './styles.module.css';

type Props = {
  title: string
  click: () => void;
  colorBack: string;
  colorFont: string;
}

const Index = ({ title, click, colorBack, colorFont }: Props) => {
  return (
    <button className={styles.conatiner} onClick={click} style={{
      backgroundColor: `${colorBack}`,
      color: `${colorFont}`
    }}>
      <div className={styles.title}>{title}</div>
    </button>
  )
}

export default Index;
