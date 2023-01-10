import React from "react";
import HealthBar from "./HealthBar";
import styles from '../styles/PlayerSummary.module.css' 


const red='#800060'
const blue='#09f1d1'
function PlayerSummary({main=false,name,health,maxHealth}){
    return(
        <div style={{backgroundColor :main?blue:red}} className={styles.main}>

            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.health}>
                <HealthBar label='HP' value={health} maxValue={maxHealth}/>   
            </div>

        </div>
    )
}

export default PlayerSummary;