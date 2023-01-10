import React from "react";
import styles from '../styles/StartMenu.module.css'

function StartMenu({onStartClick}){
    return (
    <div className={styles.main}>
       <button className={styles.startButton} onClick={onStartClick}>ready to fight</button>
       </div>
    )
}

export default StartMenu;