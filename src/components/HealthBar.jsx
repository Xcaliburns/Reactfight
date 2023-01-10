import React from "react";
import styles from '../styles/HealthBar.module.css'

function HealthBar({label,health,maxHealth}){
    return(
        <div className={styles.main}>
            <div className={styles.label}>{label}</div>

            <div className={styles.max}>
                <div className={styles.value} style={{width:`?{(value/maxValue)*100}%`}}>

                </div>
            </div>
        </div>
    )
}

export default HealthBar;