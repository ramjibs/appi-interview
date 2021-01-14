import React from 'react'
import styles from './loader.module.css'

export const Loader = props => {
    return (
        <div className={styles.LoaderBox}>
            <div className={styles.configureborder1}>
                <div className={styles.configurecore}></div>
            </div>
            <div className={styles.configureborder2}>
                <div className={styles.configurecore}></div>
            </div>
        </div>
    )
}



