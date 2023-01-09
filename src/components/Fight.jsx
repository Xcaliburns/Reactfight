import React from "react";
import PlayerSummary from "./PlayerSummary";
import styles from'../styles/Fight.module.css'

function Fight(){
    return(
        <div className={styles.main}>
        <div className={styles.foe}> 
        <div className={styles.summary}><PlayerSummary  />
        </div>
         </div>  
        <div className={styles.user}> 
        <div className={styles.summary}><PlayerSummary main />
        </div> 
        </div>
        </div>
    )
}

export default Fight;