import React from "react";
import HealthBar from "./HealthBar";
import styles from '../styles/PlayerSummary.module.css'


const red='#821200'
const blue='#1953cb'
function PlayerSummary({main=false,name,health,maxHealth}){
    return(
        <div style={{backgroundColor :main?blue:red}}>

            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.health}>
                <HealthBar label='HP' value={health} maxHealth={maxHealth}/>   
            </div>

        </div>
    )
}

export default PlayerSummary;