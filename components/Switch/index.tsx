import React, { use, useEffect, useState } from 'react'
import styles from './styles.module.css';

type Props = {
    click: () => void;
    status: boolean;
}

const index = ({click, status}: Props) => {
    
    return (
        <div onClick={click}>
            <label className={styles.switch} >
                <input type="checkbox" />
                <span className={`${styles.slider} round`}>{status ? 'Automático' : 'Manual'}</span>
            </label>
        </div>
    )
}

export default index
