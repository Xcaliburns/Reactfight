import React from "react";
import styles from '../styles/FightMenu.module.css'


function FightMenu({onAttack,onMagic,onHeal}){
    return(
        <div className={styles.main}>
            <div className={styles.option}>Attack</div>
            <div className={styles.option}>Magic</div>
            <div className={styles.option}>Heal</div>


        </div>
    )
}

export default FightMenu