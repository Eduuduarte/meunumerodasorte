import React from 'react';
import styles from './styles.module.css';

type Props = {
    title: string
    click: () => void
}

const index = ({title, click}:Props) => {
  return (
    <div className={styles.conatiner} onClick={click}>
      <div>{title}</div>
    </div>
  )
}

export default index;
