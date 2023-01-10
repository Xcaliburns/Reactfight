import React from "react";
import PlayerSummary from "./PlayerSummary";
import styles from'../styles/Fight.module.css'
import { opponentStats, playerStats } from "./Characters";
import { useState } from "react";

function Fight(){
    const [playerHealth,setPlayerHealth]=useState(playerStats.maxHealth)
    const [opponentHealth,setOpponentHealth]=useState(opponentStats.maxHealth)

    return(
        <div className={styles.main}>
        <div className={styles.opponent}> 
        <div className={styles.summary}>
            <PlayerSummary 
            health={opponentHealth}
            name={opponentStats.name}
            maxHealth={opponentStats.maxHealth} />
        </div>
         </div>  
        <div className={styles.user}> 
        <div className={styles.summary}>
            <PlayerSummary main 
             health={playerHealth}
            name={playerStats.name}
            maxHealth={playerStats.maxHealth}/>
        </div> 
        </div>
        </div>
    )
}

export default Fight;