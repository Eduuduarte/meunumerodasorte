import React from 'react';
import styles from './styles.module.css';

type Props = {
    title: string;
    click: () => void;
    status: boolean;
}

const index = ({title, click, status}:Props) => {
  return (
    <div className={styles.container} onClick={click} style={{backgroundColor: `${status ? "#023047" : "#557484"}`}}>
      <p className={styles.title} style={{ color: `${status ? "#E9F5F8" : "#B1BFC6"}`}}>{title}</p>
    </div>
  )
}

export default index
