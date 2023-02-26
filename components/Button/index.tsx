import React from 'react';
import styles from './styles.module.css';

type Props = {
    title: string
    click: () => void
}

const index = ({title, click}:Props) => {
  return (
    <button className={styles.conatiner} onClick={click}>
      <div className={styles.title}>{title}</div>
    </button>
  )
}

export default index;
